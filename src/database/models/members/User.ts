import {Sequelize, DataTypes} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(255)
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.TEXT
        },
        validation_code: {
            type: DataTypes.STRING(9)
        },
        group_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: false
    })
}