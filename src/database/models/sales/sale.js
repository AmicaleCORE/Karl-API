const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Sale = sequelize.define("sale", {
        code: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        tax_part: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        discount_code: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        target_account_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transaction_code: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        cancel_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const User = getModel(sequelize, "personals/user.js");
    const DiscountCode = getModel(sequelize, "sales/discountCode.js");
    const InternalAccount = getModel(sequelize, "financials/internalAccount.js");
    const InternalTransaction = getModel(sequelize, "financials/internalTransaction.js");
    Sale.belongsTo(Organization, {foreignKey: "organization_id"});
    Sale.belongsTo(User, {foreignKey: "author_id"});
    Sale.belongsTo(DiscountCode, {foreignKey: "discount_code"});
    Sale.belongsTo(InternalAccount, {foreignKey: "target_account_id"});
    Sale.belongsTo(InternalTransaction, {foreignKey: "transaction_code"});
    return Sale;
};
