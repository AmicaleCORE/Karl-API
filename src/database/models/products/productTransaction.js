const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const ProductTransaction = sequelize.define("product_transaction", {
        code: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        operation_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        operation_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        debit_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        credit_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
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
    const User = getModel(sequelize, "personals/user.js");
    const Sale = getModel(sequelize, "sales/sale.js");
    const InventoryCorrection = getModel(sequelize, "products/inventoryCorrection.js");
    const Purchase = getModel(sequelize, "purchases/purchase.js");
    const Product = getModel(sequelize, "products/product.js");
    ProductTransaction.belongsTo(Organization, {foreignKey: "organization_id"});
    ProductTransaction.belongsTo(Sale, {
        foreignKey: "operation_code",
        scope: {
            operation_type: "sale"
        }
    });
    ProductTransaction.belongsTo(InventoryCorrection, {
        foreignKey: "operation_code",
        scope: {
            operation_type: "inventory_correction"
        }
    });
    ProductTransaction.belongsTo(Purchase, {
        foreignKey: "operation_code",
        scope: {
            operation_type: "purchase"
        }
    });
    ProductTransaction.belongsTo(Product, {foreignKey: "product_id"});
    ProductTransaction.belongsTo(User, {foreignKey: "author_id"});
    return ProductTransaction;
};
