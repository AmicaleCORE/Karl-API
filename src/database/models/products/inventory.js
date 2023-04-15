const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Inventory = sequelize.define("inventory", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: false,
        updatedAt: false
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const Product = getModel(sequelize, "products/product.js");
    Inventory.belongsTo(Organization, {foreignKey: "organization_id"});
    Inventory.belongsTo(Product, {foreignKey: "product_id"});
    return Inventory;
};
