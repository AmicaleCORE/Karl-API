import {Sequelize, DataTypes} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define("member", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        discord_id: {
            type: DataTypes.BIGINT
        },
        first_name: {
            type: DataTypes.STRING(255)
        },
        last_name: {
            type: DataTypes.STRING(255)
        },
        membership_date: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: false
    })
}