const express = require('express')
const lostrouter = express.Router()
const router_handle = require('../router_handle/lost')
fs = require("fs");

// //导入上传文件中间件，能帮助我们实现接收文件的接口
// const multer = require('multer')
// //接收到的文件放uploads文件夹
// const upload = multer({ dest: 'uploads/' })
// //使得让外部通过链接可以访问这个文件夹里文件（ 地址 + 端口 / 文件名 ）便可访问
// // const multer = require("multer"); 
// // const path = require("path");

// // 建立数据库连接
// var fileSqlUrl = "http://localhost:80/upLoad/";
// var fileSqlName;
// var storage = multer.diskStorage({
//     //设置 上传图片服务器位置
//     destination: path.resolve(__dirname, "./upload"),
//     //设置 上传文件保存的文件名
//     filename: function (req, file, cb) {
//       // 获取后缀扩展
//       let extName = file.originalname.slice(file.originalname.lastIndexOf(".")); //.jpg
//       // 获取名称
//       let fileName = Date.now();
//       fileSqlName = fileName + extName;
//       fileSqlUrl += fileSqlName;
//       // console.log(fileName + extName); //12423543465.jpg
//       cb(null, fileName + extName);
//     },
//   });

// //   var fileFilter = function (req, file, cb) {
// //     var acceptableMime = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
// //     // 限制类型
// //     // null是固定写法
// //     if (acceptableMime.indexOf(file.mimetype) !== -1) {
// //       cb(null, true); // 通过上传
// //     } else {
// //       cb(null, false); // 禁止上传
// //     }
// //   };

// //   var limits = {
// //     fileSize: "10MB", //设置限制（可选）
// //   };

//   const imageUploader = multer({
//     // fileFilter,
//     storage,
//     // limits,
//   }).single("img")

lostrouter.post('/add', router_handle.add)
lostrouter.delete('/del', router_handle.del)
lostrouter.get('/get', router_handle.getlost)

lostrouter.post('/upload', (req, res) => {
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


module.exports = lostrouter