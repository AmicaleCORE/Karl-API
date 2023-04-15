const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const MinorInventoryCorrection = sequelize.define("minor_inventory_correction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_transaction_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        correction_reason_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: false
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const ProductTransaction = getModel(sequelize, "products/productTransaction.js");
    const CorrectionReason = getModel(sequelize, "products/inventoryCorrectionReason.js");
    MinorInventoryCorrection.belongsTo(Organization, {foreignKey: "organization_id"});
    MinorInventoryCorrection.belongsTo(ProductTransaction, {foreignKey: "product_transaction_code"});
    MinorInventoryCorrection.belongsTo(CorrectionReason, {foreignKey: "correction_reason_id"});
    return MinorInventoryCorrection;
};
