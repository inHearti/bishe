const express = require('express')
const userrouter = express.Router()
const router_handle = require('../router_handle/user')

userrouter.post('/register', router_handle.register)
userrouter.post('/login', router_handle.login)
module.exports = userrouter