const express = require('express')
const caserouter = express.Router()
const router_handle = require('../router_handle/case')

caserouter.post('/circulate', router_handle.circulate)

module.exports = caserouter