const express = require('express')
const lostrouter = express.Router()
const router_handle = require('../router_handle/lost')

lostrouter.post('/add', router_handle.add)
lostrouter.delete('/del', router_handle.del)

module.exports = lostrouter