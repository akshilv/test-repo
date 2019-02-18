'use strict'

var chai = require('chai')
var chaiHttp = require('chai-http')

const server = require('../server')

var expect = require('chai').expect

chai.use(chaiHttp)

describe('apiController', function () {
    describe('ping', function () {
        var url = ''
        afterEach(function () {
            url = ''
        })
        it('should return 200', function () {
            url = '/ping'
            chai.request(server)
                .get(url)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.text).to.be.a('string')
                    expect(res.body).to.be.an('object').that.is.empty
                })
        })
    })
})