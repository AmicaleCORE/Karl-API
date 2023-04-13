const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    const Membership = sequelize.define("membership", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        person_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        membership_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
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
    const MembershipType = getModel(sequelize, "personals/membershipType.js");
    const InternalTransaction = getModel(sequelize, "financials/internalTransaction.js");
    Membership.belongsTo(Person, {foreignKey: "person_id"});
    Membership.belongsTo(MembershipType, {foreignKey: "membership_type_id"});
    Membership.belongsTo(InternalTransaction, {foreignKey: "internal_transaction_code"});
    return Membership;
};
