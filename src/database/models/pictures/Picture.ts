import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('picture', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING(255)
        },
        path: {
            type: DataTypes.TEXT
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: false
    })
}