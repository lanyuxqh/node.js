var express = require('express')
var app = express();  //相当于 http.createServer
//公开指定目录
app.use('/public/',express.static('./public'))
app.get('/',function(req,res){  //当服务器收到 get 请求 / 时，执行回调处理函数
  res.send('hello express!')
})
app.listen('3000',function(){ //相当于 server.listen
  console.log('running...');
})
