const { DataTypes } = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Organization = sequelize.define("organization", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Picture = getModel(sequelize, "picture.js");
    const License = getModel(sequelize, "organization/license.js");
    Organization.belongsTo(Picture, {foreignKey: "logo_id"});
    Organization.belongsTo(License, {foreignKey: "license_id"});
    return Organization;
};
