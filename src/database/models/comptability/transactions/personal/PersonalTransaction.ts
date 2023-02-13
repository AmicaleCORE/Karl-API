import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('personal_transaction', {
        code: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        account_id: {
            type: DataTypes.INTEGER
        },
        amount: {
            type: DataTypes.FLOAT
        },
        flow: {
            type: DataTypes.ENUM,
            values: Object.values(TransactionFlow)
        },
        sale_code: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            timestamps: true,
            createdAt: true,
            updatedAt: false,
            deletedAt: false
        })
}