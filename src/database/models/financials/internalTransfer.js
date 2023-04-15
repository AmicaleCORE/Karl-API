const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const InternalTransfer = sequelize.define("internal_transfer", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        debit_transaction_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        credit_transaction_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: false
    });
    const InternalTransaction = getModel(sequelize, "financials/internalTransaction.js");
    InternalTransfer.belongsTo(InternalTransaction, {foreignKey: "debit_transaction_code"});
    InternalTransfer.belongsTo(InternalTransaction, {foreignKey: "credit_transaction_code"});
    return InternalTransfer;
};
