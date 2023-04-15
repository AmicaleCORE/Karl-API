const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Income = sequelize.define("income", {
        code: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        income_transaction_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        bill_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: false
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const IncomeCategory = getModel(sequelize, "incomes/incomeCategory.js");
    const IncomeTransaction = getModel(sequelize, "incomes/incomeTransaction.js");
    const Picture = getModel(sequelize, "pictures/picture.js");
    const User = getModel(sequelize, "personals/user.js");
    Income.belongsTo(Organization, {foreignKey: "organization_id"});
    Income.belongsTo(IncomeCategory, {foreignKey: "category_id"});
    Income.belongsTo(IncomeTransaction, {foreignKey: "income_transaction_code"});
    Income.belongsTo(Picture, {foreignKey: "bill_id"});
    Income.belongsTo(User, {foreignKey: "author_id"});
    return Income;
};
