const { DataTypes } = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Group = sequelize.define("group", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        permissions: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isJSON: true
            }
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    return Group;
};
