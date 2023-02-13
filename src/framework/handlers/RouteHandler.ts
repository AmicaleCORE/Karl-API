import {Express} from "express";

const Ascii = require('ascii-table')

module.exports = function handle(app: Express) {
    const routes: string[] = require('./FileHandler')('./src/routes', true)
    const table = new Ascii('Routes')

    if (routes.length === 0) {
        table.addRow('No data!')
        return console.log(table.toString())
    }

    routes.forEach((path: string) => {
        const route = require(`~/routes/${path}`)(app)
        table.addRow(`${route.path}`, route.method, route.description, `🔷 Loaded`)
    })

    table.setHeading(`Path`, `Method`, `Description`, `Status`)
    console.log(table.toString())
}