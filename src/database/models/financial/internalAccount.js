const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const InternalAccount = sequelize.define("internal_account", {
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
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        account_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Organization = require("../organizations/organization.js")(sequelize);
    InternalAccount.belongsTo(Organization, {foreignKey: "organization_id"});
    return InternalAccount;
};
