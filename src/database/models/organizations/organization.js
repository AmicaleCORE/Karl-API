const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Organization = sequelize.define("organization", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        logo_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        license_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        settings: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Picture = getModel(sequelize, "pictures/picture.js");
    const License = getModel(sequelize, "organizations/license.js");
    Organization.belongsTo(Picture, {foreignKey: "logo_id"});
    Organization.belongsTo(License, {foreignKey: "license_id"});
    return Organization;
};
