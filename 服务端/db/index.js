const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '!??!oooo',
    database: 'bishe',
})


module.exports = db