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


//反馈线索
exports.feedbackclue = (req, res) => {
    const clueinfo = req.body
    const sqlStr = 'UPDATE clue set feedback = concat(feedback , ?),status = 1  WHERE id = ?'
    db.query(sqlStr, [clueinfo.feedback, clueinfo.id], (err, results) => {
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