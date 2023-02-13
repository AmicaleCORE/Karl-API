import {DataTypes, Sequelize} from "sequelize";

module.exports = (orm: Sequelize) => {
    return orm.define('personal_account', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        member_id: {
            type: DataTypes.INTEGER
        },
        card_id: {
            type: DataTypes.INTEGER,
            unique: true
        },
        amount: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            validate: {
                min: 0
            }
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: false
    })
}