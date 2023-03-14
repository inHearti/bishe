const db = require('../db/index')

//警情通报
exports.circulate = (req, res) => {
    const caseinfo = req.body
    const sqlStr = 'INSERT INTO police_case SET ?'
    db.query(sqlStr, caseinfo, (err, results) => {
        if (err) {
            return res.cc(err.message)
        }
        if (results.affectedRows !== 1) {
            return res.cc('通报失败！')
        }
        res.cc('通报成功', 200)
    })

}

//获取案件
exports.getcase = (req, res) => {
    const sqlStr = 'select * from police_case'
    db.query(sqlStr, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 0) return res.cc('案件为空')
        res.cc(results, 200)
    })
}
