const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const fs = require("fs");

// Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。
const multer = require("multer");

// 在server服务端下新建一个public文件，在public文件下新建upload文件用于存放图片
const upload = multer({ dest: './public/upload' })

app.use(upload.any())
// 静态托管
app.use(express.static("./public"));


// //导入上传文件中间件，能帮助我们实现接收文件的接口
// const multer = require('multer')
// //接收到的文件放uploads文件夹
// const upload = multer({ dest: 'uploads/' })
// //使得让外部通过链接可以访问这个文件夹里文件（ 地址 + 端口 / 文件名 ）便可访问
// app.use(express.static('uploads'))
// //使用接收文件基本接口模板，可到官网查看更详细的
// /* app.post('/profile', upload.single('avatar'), function (req, res, next) 
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// ) */


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

app.post('/upload', (req, res) => {
    let oldName = req.files[0].filename;//获取名字
    let originalname = req.files[0].originalname;//originnalname其实就是你上传时候文件起的名字
    //给新名字加上原来的后缀
    let newName = req.files[0].originalname;
    //改图片的名字
    fs.renameSync('./public/upload/' + oldName, './public/upload/' + newName);
    // // 这段insert操作可有可无
    // const sql = 'insert into ima set ? '
    // // 为什么返回的图片少了/pubilc?因为是静态托管
    // db.query(sql, { image: `http://127.0.0.1:3007/upload/${newName}` }, (err, result) => {
    //     if (err) {
    //         return res.send(err)
    //     }
    // 上传成功
    res.cc("http://127.0.0.1/upload/" + newName, 0);
    // })
})

app.listen(80, () => {
    console.log('127.0.0.1');
})
