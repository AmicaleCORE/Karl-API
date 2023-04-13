const { DataTypes } = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const MembershipType = sequelize.define("membership_type", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: false,
        updatedAt: false
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    MembershipType.belongsTo(Organization, {foreignKey: "organization_id"});
    return MembershipType;
};
