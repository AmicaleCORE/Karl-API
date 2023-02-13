import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('transaction_correction', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type_id: {
            type: DataTypes.INTEGER
        },
        transaction_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        reason: {
            type: DataTypes.TEXT
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    })
}