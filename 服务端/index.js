const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// 在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
    // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
    res.cc = function (err, status = 1) {
        res.send({
            status,
            result: err instanceof Error ? err.message : err,
        })
    }
    next()
})

const userrouter = require('./router/user')
app.use('/user', userrouter)

const cluerouter = require('./router/clue')
app.use('/clue', cluerouter)

const caserouter = require('./router/case')
app.use('/case', caserouter)

const remindrouter = require('./router/remind')
app.use('/remind', remindrouter)

const lostrouter = require('./router/lost')
app.use('/lost', lostrouter)

const inforouter = require('./router/information')
app.use('/info', inforouter)

app.listen(80, () => {
    console.log('127.0.0.1');
})
