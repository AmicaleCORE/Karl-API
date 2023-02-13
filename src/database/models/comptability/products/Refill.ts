import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('refill', {
        code: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        transaction_code: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    })
}