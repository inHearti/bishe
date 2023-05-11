const express = require('express')
const userrouter = express.Router()
const router_handle = require('../router_handle/user')

userrouter.post('/register', router_handle.register)
userrouter.post('/login', router_handle.login)
userrouter.post('/register_yh', router_handle.register_yh)
userrouter.post('/login_yh', router_handle.login_yh)
userrouter.get('/getcommoninfo', router_handle.getcommoninfo)
userrouter.put('/changeintegral', router_handle.changeintegral)

module.exports = userrouter