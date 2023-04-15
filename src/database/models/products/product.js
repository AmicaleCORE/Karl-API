const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        picture_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const ProductCategory = getModel(sequelize, "products/productCategory.js");
    const Picture = getModel(sequelize, "pictures/picture.js");
    Product.belongsTo(Organization, {foreignKey: "organization_id"});
    Product.belongsTo(ProductCategory, {foreignKey: "category_id"});
    Product.belongsTo(Picture, {foreignKey: "picture_id"});
    return Product;
};
