import {Sequelize} from "sequelize";

module.exports = function handle(orm: Sequelize): {} | undefined {
    const map: any = {}
    const models = require('./FileHandler')('./src/database/models/', true)

    if (models.length === 0) return undefined

    models.forEach((path: string) => {
        const model = require(`~/database/models/${path}`)(orm)
        map[model.name] = model
    })

    return map
}