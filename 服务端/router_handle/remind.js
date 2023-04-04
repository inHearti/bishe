const db = require('../db/index')


//获取线索
exports.getremind = (req, res) => {
    const sqlStr = 'select * from remind'
    db.query(sqlStr, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 0) return res.cc('信息为空')
        res.cc(results, 200)
    })
}

//添加防诈提醒信息
exports.warn = (req, res) => {
    const info = req.body
    console.log(info);
    const sqlStr = 'UPDATE remind set ?'
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
  const sqlStr = 'UPDATE clue set message =  '
  db.query(sqlStr, (err, results) => {
    if (err) {
        return res.cc(err.message)
    }
    if (results.affectedRows !== 1) {
        return res.cc('删除失败！')
    }

    res.cc('删除成功', 200)
})

}