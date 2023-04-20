/* eslint-disable no-undef */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sequelize = require("../../database/sequelize");
const codeUtils = require("../../utils/codeUtils");

const createCheckoutSession = async (req, res) => {
    const successUrl = req.body.successUrl;
    const cancelUrl = req.body.cancelUrl;
    const email = req.body.email;
    if(!successUrl)
        return res.status(400).json({message: "Missing successUrl"});
    if(!cancelUrl)
        return res.status(400).json({message: "Missing cancelUrl"});
    if(!email)
        return res.status(400).json({message: "Missing email"});
    const license = await sequelize.models.license.findOne({where: {mail: email}});
    if(license)
        return res.status(400).json({message: "License already exists"});
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{
            price: process.env.STRIPE_PRICE_ID,
            quantity: 1
        }],
        mode: "subscription",
        success_url: successUrl,
        cancel_url: cancelUrl,
        customer_email: email
    });
    res.json({
        id: session.id,
        url: session.url
    });
};

const verifyPayment = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
    if(session.payment_status !== "paid")
        return res.status(400).json({message: "Payment failed"});
    const email = session.customer_details.email;
    const fetchedLicense = await sequelize.models.license.findOne({where: {mail: email}});
    if(fetchedLicense)
        return res.status(400).json({message: "License already exists"});
    const license = await sequelize.models.license.create({
        key: codeUtils.generateLicenseKey(),
        mail: email,
        expiration_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        stripe_subscription_id: session.subscription
    });
    // TODO: Send email to user
    return res.status(200).json(license);
};

const verifyValidity = async (req, res) => {
    const queryLicense = req.params.license;
    const license = await sequelize.models.license.findOne({where: {key: queryLicense}});
    if(!license)
        return res.status(404).json({message: "License not found"});
    const subscription = await stripe.subscriptions.retrieve(license.stripe_subscription_id);
    const invoice = await stripe.invoices.retrieve(subscription.latest_invoice);
    if(invoice.status !== "paid")
        return res.status(400).json({message: "License not paid"});
    const timestamp = invoice.period_end;
    const lastPayementDate = new Date(timestamp * 1000);
    if(lastPayementDate.setMonth(lastPayementDate.getMonth() + 1) < new Date())
        return res.status(400).json({message: "License expired"});
    return res.status(200).json(license);
};

const cancelSubscription = async (req, res) => {
    const queryLicense = req.params.license;
    const license = await sequelize.models.license.findOne({where: {key: queryLicense}});
    if(!license)
        return res.status(404).json({message: "License not found"});
    const subscription = await stripe.subscriptions.retrieve(license.stripe_subscription_id);
    if(subscription.status === "canceled")
        return res.status(400).json({message: "Subscription already cancelled"});
    await stripe.subscriptions.del(license.stripe_subscription_id);
    return res.status(200).json({message: "Subscription cancelled"});
};

module.exports = {
    createCheckoutSession,
    verifyPayment,
    verifyValidity,
    cancelSubscription
};
