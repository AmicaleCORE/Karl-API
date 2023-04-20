const licenseController = require("../controllers/licenseController");

module.exports = (router) => {
    // Create a checkout session
    router.post("/license/checkout", async (req, res) => {
        await licenseController.createCheckoutSession(req, res);
    });
    // Verify a payment and create a license
    router.post("/license/checkout/verify", async (req, res) => {
        await licenseController.verifyPayment(req, res);
    });
    // Check if a license is valid
    router.get("/license/:license", async (req, res) => {
        await licenseController.verifyValidity(req, res);
    });
    // Cancel a subscription
    router.delete("/license/:license", async (req, res) => {
        await licenseController.cancelSubscription(req, res);
    });
}