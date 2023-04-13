const { DataTypes } = require("sequelize");
const { getModel } = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    console.log("Loading Order model...");
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    const User = getModel(sequelize, "sample/sampleUser.js");
    Order.belongsTo(User, { foreignKey: "author_id" });
    return Order;
};
