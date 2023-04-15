const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const PersonalAccount = sequelize.define("personal_account", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        person_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        qr_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const Organization = getModel(sequelize, "organizations/organization.js");
    const User = getModel(sequelize, "personals/user.js");
    PersonalAccount.belongsTo(Organization, {foreignKey: "organization_id"});
    PersonalAccount.belongsTo(User, {foreignKey: "person_id"});
    return PersonalAccount;
};
