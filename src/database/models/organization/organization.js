const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Organization = sequelize.define("organization", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true
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
            allowNull: false,
            defaultValue: "{}"
        }
    });
    // Define FKs
    return Organization;
};
