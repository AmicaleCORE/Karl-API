const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const DiscountCode = sequelize.define("discount", {
        code: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        is_percentage: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        validity_start: {
            type: DataTypes.DATE,
            allowNull: false
        },
        validity_end: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: false
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    DiscountCode.belongsTo(Organization, {foreignKey: "organization_id"});
    return DiscountCode;
};
