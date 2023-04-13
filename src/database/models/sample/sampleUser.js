const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    console.log("Loading User model...");
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    // Define FKs
    return User;
};
