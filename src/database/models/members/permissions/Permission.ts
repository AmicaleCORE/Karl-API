import {Sequelize, DataTypes} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define("permission", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            unique: true
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    })
}