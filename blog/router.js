var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')
const e = require('express')

var router = express.Router()

router.get('/', function (req, res) {
    // console.log(req.session.user);
    res.render('index.html', {
        user: req.session.user
    })
})

router.get('/login', function (req, res) {
    res.render('login.html')
})

router.post('/login', function (req, res) {
    // 1、获取表单提交的数据
    var body = req.body;
    // 2、操作数据库 判断邮箱密码是否正确
    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }, function (err, user) {
        if (err) {
            res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }
        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid.'
            })
        }
        req.session.user = user;
        res.status(200).json({
            err_code: 0,
            message: 'OK'
        })

    })
    // 3、发送响应
})

router.get('/register', function (req, res) {
    res.render('register.html')
})

router.post('/register', function (req, res) {
    // 1、获取表单提交的数据
    var body = req.body;
    // 2、操作数据库  判断用户是否存在
    User.findOne({
        $or: [
            {
                email: body.email
            },
            {
                nickname: body.nickname
            }
        ]

    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error'
            })
        }
        if (data) {
            // 邮箱或昵称已存在
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname already exists.'
            })
        }
        // 邮箱和昵称不存在 注册
        body.password = md5(md5(body.password))  // 对密码进行 md5 重复加密
        new User(body).save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Internal error'
                })
            }
            req.session.user = user;

            res.status(200).json({
                err_code: 0,
                message: 'OK'
            })
        })
    })
    // 3、发送响应
})

router.get('/logout', function (req, res) {
    req.session.user = null;
    res.redirect('/login');
})

module.exports = router