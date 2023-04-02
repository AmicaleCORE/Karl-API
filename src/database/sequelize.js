/* eslint-disable no-undef */
const { Sequelize } = require("sequelize");

let sequelize;
if(process.env.DB_TYPE === "sqlite")
    sequelize = new Sequelize({
        dialect: "sqlite",
        storage: "database.db",
        logging: process.env.DB_LOGGING === "true"
    });
else
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_TYPE,
        logging: process.env.DB_LOGGING === "true"
    });


// Loading models
// const models = require('../handlers/modelHandler')(sequelize);
const models = undefined; // TODO: Load models

sequelize.sync({force: process.env.DB_FORCE_INIT === "true"}).then(() => {
    console.log("Database synchronized");
    // TODO: Add defaults and seed if needed
});

module.exports = {
    models
};
