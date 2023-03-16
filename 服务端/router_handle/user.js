const db = require('../db/index')


//注册接口
exports.register = (req, res) => {
    const userinfo = req.body
    // 定义 SQL 语句，查询用户名是否被占用
    const sqlStr = 'select * from police_users where phone=?'
    console.log(userinfo);
    db.query(sqlStr, userinfo.phone, (err, results) => {
        if (err) {
            //执行sql语句失败
            return res.cc(err)
        }
        if (results.length > 0) {
            //判断用户名是否重复
            return res.cc('手机号已注册！')
        }
    })
    const sqlStr1 = 'INSERT INTO police_users SET ?'
    db.query(sqlStr1, userinfo, (err, results) => {
        if (err) {
            return res.cc(err.message)
        }
        if (results.affectedRows !== 1) {
            return res.cc('注册失败！')
        }

        res.cc('注册成功', 200)
    })

}

//登录接口
exports.login = (req, res) => {
    const userinfo = req.body
    const sqlStr = 'select * from police_users where phone=?'

    db.query(sqlStr, userinfo.phone, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('用户名错误！')
        if (userinfo.password == results[0].password)
            res.cc(results[0], 200)
    })
}


//获取普通用户信息
exports.getcommoninfo = (req, res) => {
    const sqlStr = 'select * from common_users'
    db.query(sqlStr, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 0) return res.cc('用户信息为空')
        res.cc(results, 200)
    })
}
