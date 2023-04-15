const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const PeriodicTransaction = sequelize.define("periodic_transaction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        source_account_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        source_account_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        destination_account_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        destination_account_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        next_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        period: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: false
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const InternalAccount = getModel(sequelize, "financials/internalAccount.js");
    const ExternalAccount = getModel(sequelize, "financials/externalAccount.js");
    PeriodicTransaction.belongsTo(Organization, {foreignKey: "organization_id"});
    PeriodicTransaction.belongsTo(InternalAccount, {
        foreignKey: "source_account_id",
        scope: {
            source_account_type: "internal"
        }
    });
    PeriodicTransaction.belongsTo(ExternalAccount, {
        foreignKey: "source_account_id",
        scope: {
            source_account_type: "external"
        }
    });
    PeriodicTransaction.belongsTo(InternalAccount, {
        foreignKey: "destination_account_id",
        scope: {
            destination_account_type: "internal"
        }
    });
    PeriodicTransaction.belongsTo(ExternalAccount, {
        foreignKey: "destination_account_id",
        scope: {
            destination_account_type: "external"
        }
    });
    return PeriodicTransaction;
};
