const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sequelize = require("../../database/sequelize");

const createCheckoutSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price: "price_1MyiJnDwSVjqIUV9GUW1H755",
            quantity: 1
        }],
        mode: 'subscription',
        success_url: `${req.protocol}://${req.get('host')}/success`,
        cancel_url: `${req.protocol}://${req.get('host')}/cancel`,
    });
    res.json({
        id: session.id,
        url: session.url
    });
}

const verifyPayment = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
    if(session.payment_status === "paid"){
        const email = session.customer_details.email;
        // TODO: Add license to database
        // TODO: Send email to user
        return res.status(200).json({message: "Payment successful"});
    }
    return res.status(400).json({message: "Payment failed"});
}

const verifyValidity = async (req, res) => {
    const queryLicense = req.params.license;
    const license = await sequelize.models.license.findOne({where: {key: queryLicense}});
    if(!license)
        return res.status(404).json({message: "License not found"});
    if(license.expiration_date < new Date())
        return res.status(400).json({message: "License expired"});
    return res.status(200).json(license);
}

module.exports = {
    createCheckoutSession,
    verifyPayment,
    verifyValidity
}
