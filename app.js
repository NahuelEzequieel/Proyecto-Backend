const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(cors())

// Ruta
const apiRouter = require('./router/api')
app.use('/motos', apiRouter )

// Conección a mongo
const {connect} = require ('./db/connect')
connect()

module.exports = app


