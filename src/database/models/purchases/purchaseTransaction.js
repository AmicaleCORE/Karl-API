const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const PurchaseTransaction = sequelize.define("purchase_transaction", {
        code: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        internal_transaction_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        external_transaction_code: {
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
    const ExternalTransaction = getModel(sequelize, "financials/externalTransaction.js");
    PurchaseTransaction.belongsTo(InternalTransaction, {foreignKey: "internal_transaction_code"});
    PurchaseTransaction.belongsTo(ExternalTransaction, {foreignKey: "external_transaction_code"});
    return PurchaseTransaction;
};
