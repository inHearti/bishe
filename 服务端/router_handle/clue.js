const db = require('../db/index')

//获取线索
exports.getclue = (req, res) => {
    const sqlStr = 'select * from clue'
    db.query(sqlStr, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 0) return res.cc('线索为空')
        res.cc(results, 200)
    })
}

//提供线索
exports.provideclue = (req, res)=>{
    const clueinfo = req.body
    const sqlStr = 'UPDATE clue set message = concat(message , ";" , ?) WHERE id = ?'
    db.query(sqlStr,[clueinfo.message,clueinfo.id], (err, results) => {
        if (err) {
            //执行sql语句失败
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc('失败！')
        }
        res.cc('成功', 200)
    })
}

//反馈线索
exports.feedbackclue = (req, res) => {
    const clueinfo = req.body
    const sqlStr = 'UPDATE clue set feedback = concat(feedback , ?),status = 1,police=?,handle_time=?,handle_place=?  WHERE id = ?'
    db.query(sqlStr, [clueinfo.feedback, clueinfo.police, clueinfo.handle_time, clueinfo.handle_place, clueinfo.id], (err, results) => {
        if (err) {
            //执行sql语句失败
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc('反馈失败！')
        }
        res.cc('反馈成功', 200)
    })

}

//用户举报
exports.report = (req, res) => {
    const clueinfo = req.body
    console.log(clueinfo);
    const sqlStr2 = 'UPDATE common_users SET integral = integral +1 WHERE id = ?'
    db.query(sqlStr2, clueinfo.id, (err, results) => {
        if (err) {
            //执行sql语句失败
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc('举报失败！')
        }
        
    })
    Reflect.deleteProperty(clueinfo,'id')
    const sqlStr = 'INSERT INTO clue SET ?'
    db.query(sqlStr, clueinfo, (err, results) => {
        if (err) {
            //执行sql语句失败
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc('举报失败！')
        }
        res.cc('举报成功', 200)
    })
   
}