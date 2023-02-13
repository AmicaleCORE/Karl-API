import {DataTypes, Sequelize} from "sequelize";
import {TransactionFlow} from "~/database/enums/TransactionFlow";

module.exports = (orm: Sequelize) => {
    return orm.define(`transaction`, {
        code: {
            type: DataTypes.STRING(15),
            primaryKey: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        billing_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        flow: {
            type: DataTypes.ENUM,
            values: Object.values(TransactionFlow)
        },
        source: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        amount: {
            type: DataTypes.FLOAT,
            validate: {
                min: 0
            }
        },
        correction_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    })
}