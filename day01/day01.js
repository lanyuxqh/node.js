var fs = require("fs");
// // 文件写
// fs.writeFile('./hello.md','hello!',function(error){
//   if(error){
//     console.log("写入失败");
//   }else{
//     console.log("写入成功");
//   }
// })
// // 文件读
// fs.readFile('./hello.md',function(error,data){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(data.toString());
//   }
// })

var fs = require("fs");
var http = require("http");
// 1、创建服务
var server = http.createServer();
// 2、监听request请求事件，设置请求处理函数
server.on("request", function (request, response) {
  console.log("收到请求,请求路径是" + request.url);

  if (request.url === "/product") {
    response.setHeader("Content-Type", "text/plain;charset=utf-8");
    var products = [
      {
        name: "苹果", //中文乱码原因：utf-8通用国际编码，但是，中文os默认GBK   解决方法：告诉浏览器 response.setHeader('Content-Type','text/plain;charset=utf-8');
        price: "5",
      },
      {
        name: "apple",
        price: "5",
      },
      {
        name: "apple",
        price: "5",
      },
    ];
    response.end(JSON.stringify(products)); //字符串和二进制  数组可以用JSON.stringify来转换
  } else if (request.url === "/html") {
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.end('<p>hello <a href="http://www.baidu.com">点我<a> <p>');
  } else if (request.url === "/index") {
    fs.readFile("./index.html", function (error, data) {
      if (error) {
        response.setHeader("Content-Type", "text/plain;charset:utf8");
        response.end("文件读取失败");
      } else {
        response.setHeader("Content-Type", "text/html;charset:utf-8");
        response.end(data); //二进制
      }
    });
  }
});
// 3、绑定端口号，启动服务
server.listen("3000", function () {
  console.log("服务器启动成功,可以访问了");
});
