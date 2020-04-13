/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', routes)

app.listen(port, () => console.log(`We are live on port ${port}`))
