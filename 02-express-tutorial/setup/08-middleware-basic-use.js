const logger = require('../logger')
const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(2003)