const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("group", {
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
            type: DataTypes.STRING(255),
            allowNull: false
        },
        permissions: {
            type: DataTypes.STRING(255),
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
};
