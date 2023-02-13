import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('sale', {
        code: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        author_id: {
            type: DataTypes.INTEGER
        },
        type_id: {
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