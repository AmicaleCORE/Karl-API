import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('product_movement', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        operation_code: {
            type: DataTypes.STRING
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        movement_type: {
            type: DataTypes.INTEGER
        },
        change: {
            type: DataTypes.INTEGER
        },
        process_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    })
}