const db = require('../db/index')

//添加物品
exports.add = (req, res) => {
    const info = req.body
    const sqlStr = 'INSERT INTO lost_items  SET ?'
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

//获取物品信息
exports.getlost = (req, res) => {
    const sqlStr = 'select * from lost_items'
    db.query(sqlStr, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 0) return res.cc('物品信息为空')
        res.cc(results, 200)
    })
}


//删除物品
exports.del = (req, res) => {
    const info = req.query
    const sqlStr = 'DELETE from lost_items WHERE id = ?'
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