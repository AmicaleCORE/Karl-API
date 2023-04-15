const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Purchase = sequelize.define("purchase", {
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
        purchase_transaction_code: {
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
    const PurchaseCategory = getModel(sequelize, "purchases/purchaseCategory.js");
    const PurchaseTransaction = getModel(sequelize, "purchases/purchaseTransaction.js");
    const Picture = getModel(sequelize, "pictures/picture.js");
    const User = getModel(sequelize, "personals/user.js");
    Purchase.belongsTo(Organization, {foreignKey: "organization_id"});
    Purchase.belongsTo(PurchaseCategory, {foreignKey: "category_id"});
    Purchase.belongsTo(PurchaseTransaction, {foreignKey: "purchase_transaction_code"});
    Purchase.belongsTo(Picture, {foreignKey: "bill_id"});
    Purchase.belongsTo(User, {foreignKey: "author_id"});
    return Purchase;
};
