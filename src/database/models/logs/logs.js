const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Log = sequelize.define("log", {
        reference: {
            type: DataTypes.STRING(255),
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        message: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: true,
        updatedAt: true
    });
    const User = require("../personals/user.js")(sequelize);
    const Organization = require("../organizations/organization.js")(sequelize);
    Log.belongsTo(User, {foreignKey: "author_id"});
    Log.belongsTo(Organization, {foreignKey: "organization_id"});
    return Log;
};
