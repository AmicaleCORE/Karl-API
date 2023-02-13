import {Sequelize, DataTypes} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define("product_movement", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        operation_code: {
            type: DataTypes.STRING(9)
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        change: {
            type: DataTypes.INTEGER
        },
        movement_type: {
            type: DataTypes.ENUM,
            values: Object.values(MovementType)
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