var express = require("express");
var body_parser = require("body-parser");
var app = express();
app.use("/public/", express.static("./public"));
app.engine("html", require("express-art-template"));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

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

app.get("", function (req, res) {
  res.render("index.html", { comments: comments });
});
app.get("/post", function (req, res) {
  res.render("./post.html");
});
app.post("/post", function (req, res) {
  var comment = req.body
  comment.dateTime = "2020-10-10 19:00:00";
  comments.unshift(comment);
  res.redirect("/");
});
// app.get("/pinglun", function (req, res) {
//   var comment = req.query;
//   comment.dateTime = "2020-10-10 19:00:00";
//   comments.unshift(comment);
//   res.redirect("/");
// });

app.listen(3000, function () {
  console.log("running...");
});
