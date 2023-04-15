const {DataTypes} = require("sequelize");
const {getModel} = require("../../../handlers/modelsHandler");

module.exports = (sequelize) => {
    return sequelize.define("external_account", {
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
            }
        },
        {
            underscored: true,
            createdAt: true,
            updatedAt: false
        });
};
