'use strict'

class apiController {
    
    ping(req, res) {
        console.log('Client is pinging server')
        res.status(200).send('Server is alive!')
    }
}

module.exports = apiController