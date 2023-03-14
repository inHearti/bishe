const express = require('express')
const inforouter = express.Router()
const router_handle = require('../router_handle/information')

inforouter.put('/changeinfo', router_handle.changeinfo)
inforouter.get('/getinfo', router_handle.getinfo)

module.exports = inforouter