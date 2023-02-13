import {Sequelize, DataTypes} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define(`periodic_transaction`, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        source: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        flow: {
            type: DataTypes.ENUM,
            values: Object.values(TransactionFlow)
        },
        amount: {
            type: DataTypes.FLOAT,
            validate: {
                min: 0
            }
        },
        start_date: {
            type: DataTypes.DATEONLY
        },
        next_date: {
            type: DataTypes.DATEONLY
        },
        period: {
            type: DataTypes.ENUM,
            values: Object.values(PeriodicTransactionPeriod)
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: false
    })
}