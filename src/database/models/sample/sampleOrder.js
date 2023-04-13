const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    const User = require("./sampleUser")(sequelize);
    Order.belongsTo(User, { foreignKey: "author_id" });
    return Order;
};
