// //代码风格 分号是否要加
// var a = 1
// ;(function () {
//   console.log(a);
// })()
// ;["香蕉", "苹果"].forEach(function (item) {
//   console.log(item);
// })
// ;`hello`.toString();


// var http = require("http");
// var fs = require("fs");
// var wwwDir = "F:/test/movie/www";
// var server = http.createServer();
// server.on("request", function (req, res) {
//   var url = req.url;
//   var filePath = "/index.html";
//   if (url !== "/") {
//     filePath = url;
//   }
//   fs.readFile(wwwDir + filePath, function (err, data) {
//     if (err) {
//       return res.end("404 Not Found");
//     }
//     res.end(data);
//   });
// });
// server.listen("3000", function () {
//   console.log("服务器启动成功,可以访问了");
// });

// //目录列表渲染
// var http = require("http");
// var fs = require("fs");
// var wwwDir = "F:/test/movie/www";
// var server = http.createServer();
// server.on("request", function (req, res) {
//   fs.readFile("./template.html", function (err, data) {
//     if (err) {
//       return res.end("404 Not Found" + err);
//     }
//     //读目录
//     fs.readdir(wwwDir, function (err, file) {
//       if (err) {
//         return res.end("Can Not Find www Dir");
//       }
//       var content = "";
//       file.forEach(function (item) {
//         content += `
//           <tr>
//             <td data-value="apple/"><a class="icon dir" href="F:/test/movie/www">${item}/</a></td>
//             <td class="detailsColumn" data-value="0"></td>
//             <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
//           </tr>
//         `;
//       });
//       //替换模板中的目录
//       data = data.toString();
//       data = data.replace("^_^", content);
//       res.end(data);
//     });
//   });
// });
// server.listen("3000", function () {
//   console.log("服务器启动成功,可以访问了");
// });

// //node中使用模板引擎
// var template = require('art-template')
// var fs = require('fs')
// fs.readFile('./tpl.html', function (err, data) {
//   if (err) {
//     return console.log('读取文件失败了')
//   }
//   // 默认读取到的 data 是二进制数据，而模板引擎的 render 方法需要接收的是字符串
//   var ret = template.render(data.toString(), {
//     name: 'Jack',
//     age: 18,
//     province: '北京市',
//     hobbies: [
//       '写代码',
//       '唱歌',
//       '打游戏'
//     ],
//     title: '个人信息'
//   })
//   console.log(ret)
// })


// //使用模板引擎替换html页面
// var art_template = require("art-template");
// var http = require("http");
// var fs = require("fs");
// var server = http.createServer();
// var wwwDir = "F:/test/movie/www";
// server.on("request", function (req, res) {
//   fs.readFile("./template_Apache.html", function (err, data) {
//     if (err) {
//       return res.end("404 Not Found");
//     }
//     fs.readdir(wwwDir, function (err, file) {
//       var htmlStr = art_template.render(data.toString(), {
//         title: "哈哈",
//         files: file,
//       });
//       res.end(htmlStr);
//     });
//   });
// });
// server.listen("3000", function () {
//   console.log("running......");
// });
