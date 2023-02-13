import {initDatabase} from "~/database/Orm";
import {Express} from "express";

require('dotenv')
const express = require('express')

const app: Express = express()

// Default middlewares
app
    .use(express.json()) // Body to JSON

// require('~/framework/handlers/RouteHandler')(app)

const port: number = parseInt(process.env.PORT || '3000')
app.listen(port, () => {
    initDatabase(true)
    console.log(`Listening on: http://localhost:${port}/`)
})