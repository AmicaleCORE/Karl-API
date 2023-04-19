const licenseController = require("../controllers/licenseController");

module.exports = (router) => {
    router.post("/license/checkout", async (req, res) => {
        await licenseController.createCheckoutSession(req, res);
    });
    // Check license validity
    router.post("/license/checkout/verify", async (req, res) => {
        await licenseController.verifyPayment(req, res);
    });
    // Check if a license is valid
    router.get("/license/:license", async (req, res) => {
        await licenseController.verifyValidity(req, res);
    });
}