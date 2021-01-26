var http = require("http");
var fs = require("fs");
var art_template = require("art-template");
var url = require("url");

var comments = [
  {
    name: "张三",
    message: "今天天气不错",
    dateTime: "2020-10-10 17:00:00",
  },
  {
    name: "张三1",
    message: "今天天气不错",
    dateTime: "2020-10-10 17:00:00",
  },
  {
    name: "张三2",
    message: "今天天气不错",
    dateTime: "2020-10-10 17:00:00",
  },
  {
    name: "张三3",
    message: "今天天气不错",
    dateTime: "2020-10-10 17:00:00",
  },
];

http
  .createServer(function (req, res) {
    var parseObj = url.parse(req.url, true);
    var pathname = parseObj.pathname;
    if (pathname === "/") {
      fs.readFile("./views/index.html", function (err, data) {
        if (err) {
          return res.end("404 Not Found");
        }
        data = art_template.render(data.toString(), {
          comments: comments,
        });
        res.end(data);
      });
    } else if (pathname === "/post") {
      fs.readFile("./views/post.html", function (err, data) {
        if (err) {
          return res.end("404 Not Found");
        }
        res.end(data);
      });
    } else if (pathname === "/pinglun") {
      //存储
      var comment = parseObj.query;
      comment.dateTime = "2020-11-11 11:00:00";
      comments.unshift(comment);
      //重定向
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    } else if (pathname.indexOf("/public/") === 0) {
      fs.readFile("." + pathname, function (err, data) {
        if (err) {
          return res.end("404 Not Found");
        }
        res.end(data);
      });
    } else {
      fs.readFile("./views/404.html", function (err, data) {
        if (err) {
          return res.end("404 Not Found");
        }
        res.end(data);
      });
    }
  })
  .listen("3000", function () {
    console.log("running...");
  });
