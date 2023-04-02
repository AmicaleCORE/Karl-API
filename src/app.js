/* eslint-disable no-undef */
// Importing modules
const express = require("express");
require("dotenv").config();
const https = require("https");
const fs = require("fs");
const app = express();

// Importing middlewares
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Init middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: false,
}));

// TODO: Route registering
// require("./handlers/RoutesHandler")(app);

// Default route
app.get("/", (req, res) => {
    res.status(404).json({error: "Not found"});
});

// Start server
if(process.env.SSL.toUpperCase() === "FALSE"){
    app.listen(parseInt(process.env.PORT), process.env.BIND_ADDRESS, () => {
        console.log(`Server started on http://${process.env.BIND_ADDRESS}:${process.env.PORT}`);
    });
}else{
    https.createServer({
        key: fs.readFileSync(process.env.KEY_FILE),
        cert: fs.readFileSync(process.env.CERT_FILE)
    }, app).listen(parseInt(process.env.PORT), () => {
        console.log(`Server started on https://${process.env.BIND_ADDRESS}:${process.env.PORT}`);
    });
}
