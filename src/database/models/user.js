const { DataTypes } = require("sequelize");
const {getModel} = require("../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        validation_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_organization_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        specific_permissions: {
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    });
    const Organization = getModel(sequelize, "organization/organization.js");
    User.belongsTo(Organization, {foreignKey: "organization_id"});
    return User;
};
