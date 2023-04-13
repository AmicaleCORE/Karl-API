const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("picture", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
};
