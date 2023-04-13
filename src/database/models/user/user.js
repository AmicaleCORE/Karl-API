const { DataTypes } = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

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
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        validation_code: {
            type: DataTypes.STRING(255),
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
            type: DataTypes.STRING(255),
            allowNull: true,
            validate: {
                isJSON: true
            }
        },
        avatar_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Organization = getModel(sequelize, "organization/organization.js");
    const Group = getModel(sequelize, "user/group.js");
    User.belongsTo(Organization, {foreignKey: "organization_id"});
    User.belongsTo(Group, {foreignKey: "group_id"});
    return User;
};
