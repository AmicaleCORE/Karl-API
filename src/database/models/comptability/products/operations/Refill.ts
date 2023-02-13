import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('refill', {
        code: {
            type: DataTypes.STRING(9),
            primaryKey: true
        },
        transaction_code: {
            type: DataTypes.STRING(15)
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    })
}