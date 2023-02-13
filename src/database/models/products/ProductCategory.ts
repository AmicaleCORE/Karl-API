import {Sequelize, DataTypes} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define("product_category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            unique: true
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    })
}