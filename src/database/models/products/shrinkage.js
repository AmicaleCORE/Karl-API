const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Shrinkage = sequelize.define("shrinkage", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        justification: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const ProductTransaction = getModel(sequelize, "products/productTransaction.js");
    Shrinkage.belongsTo(Organization, {foreignKey: "organization_id"});
    Shrinkage.belongsTo(ProductTransaction, {foreignKey: "product_transaction_id"});
    return Shrinkage;
};
