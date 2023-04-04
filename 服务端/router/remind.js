const express = require('express')
const remindrouter = express.Router()
const router_handle = require('../router_handle/remind')

remindrouter.get('/get', router_handle.getremind)
remindrouter.post('/warn', router_handle.warn)
remindrouter.delete('/del', router_handle.del)

module.exports = remindrouter