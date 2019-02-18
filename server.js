'use strict'

const express = require('express')
const apiController = require('./lib/controllers').apiController

const app = express()

const port = 9999

// Simple GET api to check if server is pingable or not 
app.get('/ping', apiController.ping)

// Start the server 
var server = app.listen(process.env.PORT || port, () => {
    console.log(`Server listening on ${server.address().port}`)
})

module.exports = server