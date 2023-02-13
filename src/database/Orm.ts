import {Sequelize} from "sequelize";

const orm: Sequelize = new Sequelize({
    storage: 'database.db',
    dialect: 'sqlite',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: false
})

require('~/framework/handlers/ModelHandler')(orm)

export function initDatabase(force: boolean) {
    orm.sync({ force }).then(_ => {
        console.log(`Database synchronized.`)
    }).catch((err: Error) => console.log(err))
}