const db = require('../db/index')

//添加防诈提醒信息
exports.warn = (req, res) => {
    const info = req.body
    const sqlStr = 'INSERT INTO remind SET ?'
    db.query(sqlStr, info, (err, results) => {
        if (err) {
            return res.cc(err.message)
        }
        if (results.affectedRows !== 1) {
            return res.cc('添加失败！')
        }

        res.cc('添加成功', 200)
    })

}

//删除信息
exports.del = (req,res)=>{
  const info = req.query
  const sqlStr = 'DELETE from remind WHERE id = ?'
  db.query(sqlStr, info.id, (err, results) => {
    if (err) {
        return res.cc(err.message)
    }
    if (results.affectedRows !== 1) {
        return res.cc('删除失败！')
    }

    res.cc('删除成功', 200)
})

}