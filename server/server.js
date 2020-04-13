/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')

const app = express()

const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../dist')))

app.use('/api', routes)

app.use('/', (_req, res) =>
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
)

app.listen(port, () => console.log(`We are live on port ${port}`))
