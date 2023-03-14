const db = require('../db/index')

//修改资讯
exports.changeinfo = (req, res) => {
  const info = req.body
  const sqlStr = 'UPDATE information set ?  WHERE id = ?'
  db.query(sqlStr, [info ,info.id], (err, results) => {
      if (err) {
          //执行sql语句失败
          return res.cc(err)
      }
      if (results.affectedRows !== 1) {
          return res.cc('反馈失败！')
      }
      res.cc('修改成功', 200)
  })

}

//获取资讯
exports.getinfo = (req, res) => {
    const sqlStr = 'select * from information'
    db.query(sqlStr, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 0) return res.cc('资讯为空')
        res.cc(results, 200)
    })
}
