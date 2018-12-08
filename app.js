require('babel-register')({ ignore: /\/(build|node_modules)\// })
require('babel-polyfill')

require('dotenv').config()

const express = require('express')

// Instance Express in app
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

// Instance Socket in app
app.use((req, res, next) => {
    req.io = io
    return next()
})

// Initialize Data Base
app.db = require('./src/helpers/db')()
// Import Aplication
require('./src/index')(app)


module.exports = server
