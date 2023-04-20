const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("license", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        key: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        mail: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: true
        },
        expiration_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stripe_subscription_id: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
};
