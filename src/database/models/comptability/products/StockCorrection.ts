import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('stock_correction', {
        code: {
            type: DataTypes.STRING(9),
            primaryKey: true
        },
        author_id: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        deletedAt: false
    })
}