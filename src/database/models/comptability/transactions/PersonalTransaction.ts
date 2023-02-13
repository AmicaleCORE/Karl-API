import {DataTypes, Sequelize} from "sequelize";
import {TransactionFlow} from "~/database/enums/TransactionFlow";

module.exports = (orm: Sequelize) => {
    return orm.define('personal_transaction', {
        code: {
            type: DataTypes.STRING(15),
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
            type: DataTypes.STRING(9),
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