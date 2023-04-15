const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const PersonalTransaction = sequelize.define("personal_transaction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        debit_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        credit_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sale_code: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: false
    });
    const PersonalAccount = getModel(sequelize, "personals/personalAccount.js");
    const Sale = getModel(sequelize, "sales/sale.js");
    PersonalTransaction.belongsTo(PersonalAccount, {foreignKey: "account_id"});
    PersonalTransaction.belongsTo(Sale, {foreignKey: "sale_code"});
    return PersonalTransaction;
};
