const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Donation = sequelize.define("donation", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        person_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        internal_transaction_code: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: false
    });
    const Person = getModel(sequelize, "personals/person.js");
    const User = getModel(sequelize, "personals/user.js");
    const InternalTransaction = getModel(sequelize, "financials/internalTransaction.js");
    Donation.belongsTo(Person, {foreignKey: "person_id"});
    Donation.belongsTo(User, {foreignKey: "author_id"});
    Donation.belongsTo(InternalTransaction, {foreignKey: "internal_transaction_code"});
    return Donation;
};
