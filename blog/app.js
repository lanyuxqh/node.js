var express = require('express')
//var mongoose = require('mongoose')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, '/views/'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: 'itcast',  // 配置加密字符串，它会在原有加密基础上和这个字符串拼起来去加密
    resave: false,
    saveUninitialized: false  // 无论你是否使用session，默认给你一把钥匙
}))

app.use(router)

app.listen(3000, function () {
    console.log('running...');
})
