import {Sequelize, DataTypes} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define("product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            unique: true
        },
        unit_price: {
            type: DataTypes.FLOAT,
            validate: {
                min: 0
            }
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        picture_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stock_amount: {
            type: DataTypes.INTEGER
        },
        alert_amount: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    })
}