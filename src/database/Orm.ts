import {Sequelize} from "sequelize";
import {applyForeignKeys} from "~/framework/functions/Models";

const orm: Sequelize = new Sequelize({
    storage: 'database.db',
    dialect: 'sqlite',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: false
})

export const models = require('~/framework/handlers/ModelHandler')(orm)

applyForeignKeys()

export function initDatabase(force: boolean) {
    orm.sync({ force }).then(_ => {
        console.log(`Database synchronized.`)
    }).catch((err: Error) => console.log(err))
}