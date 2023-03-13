const express = require('express')
const caserouter = express.Router()
const router_handle = require('../router_handle/case')

caserouter.post('/circulate', router_handle.circulate)
caserouter.get('/getcase', router_handle.getcase)

module.exports = caserouter