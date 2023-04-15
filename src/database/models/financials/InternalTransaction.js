const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const InternalTransaction = sequelize.define("internal_transaction", {
        code: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        transaction_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        debit_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        credit_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const InternalAccount = getModel(sequelize, "financials/internalAccount.js");
    InternalTransaction.belongsTo(InternalAccount, {foreignKey: "account_id"});
    return InternalTransaction;
};
