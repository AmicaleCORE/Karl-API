const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const InventoryCorrection = sequelize.define("inventory_correction", {
        code: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        correction_reason_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const CorrectionReason = getModel(sequelize, "products/correctionReason.js");
    InventoryCorrection.belongsTo(Organization, {foreignKey: "organization_id"});
    InventoryCorrection.belongsTo(CorrectionReason, {foreignKey: "correction_reason_id"});
    return InventoryCorrection;
};
