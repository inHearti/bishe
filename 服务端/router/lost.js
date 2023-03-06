const express = require('express')
const lostrouter = express.Router()
const router_handle = require('../router_handle/lost')
// const multer = require("multer"); 
// const path = require("path");

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

module.exports = lostrouter