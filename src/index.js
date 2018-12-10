require('babel-register')({ ignore: /\/(build|node_modules)\// })
require('babel-polyfill')
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')

// Instance Express in app
const app = express()

// Initialize Data Base
app.db = require('./helpers/db')()

// Middlewares
app.use(helmet())
app.use(compression())
//Body-parse settings
app.use(bodyParser.json())
// Converts the body of a request in json format
app.use(bodyParser.urlencoded({extended : true}))

// Routes
app.use(require('./routes'))

module.exports = app