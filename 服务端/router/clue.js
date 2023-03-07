const express = require('express')
const cluerouter = express.Router()
const router_handle = require('../router_handle/clue')

cluerouter.get('/getclue', router_handle.getclue)
cluerouter.put('/feedbackclue', router_handle.feedbackclue)
cluerouter.post('/report', router_handle.report)
module.exports = cluerouter
