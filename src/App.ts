require('dotenv')
import {Express} from "express";
const express = require('express')
const parser = require('body-parser')
const morgan = require('morgan')

const app: Express = express()

// Default middlewares
app
    .use(parser.json()) // Body to JSON
    .use(morgan("default", {})) // Console logger

require('~/framework/handlers/RouteHandler')(app)

const port: number = parseInt(process.env.PORT || '3000')
app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}/`)
})