/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 */

var express = require("express");
var Students = require("./students");

//1、创建一个路由容器
var router = express.Router();

//2、把路由都挂载到路由容器中

/*
 * 渲染学生列表页面
 */
router.get("/students", function (req, res) {
  Students.find(function (err, students) {
    if (err) {
      return res.status(500).send("Server Error");
    }
    res.render("index.html", {
      students: students,
    });
  });
  // fs.readFile("./db.json", "utf8", function (err, data) {
  //   if (err) {
  //     return res.status(500).send("Server Error");
  //   }
  //   res.render("index.html", {
  //     students: JSON.parse(data).students,
  //   });
  // });
});

/*
 * 渲染添加学生页面
 */
router.get("/students/new", function (req, res) {
  res.render("new.html");
});

/*
 * 处理添加学生
 */
router.post("/students/new", function (req, res) {
  var student = req.body;
  Students.save(student, function (err) {
    if (err) {
      return res.status(500).send("Server error.");
    }
    res.redirect("/students");
  });
});

/*
 * 渲染编辑学生页面
 */
router.get("/students/edit", function (req, res) {
  Students.findById(parseInt(req.query.id), function (err, stu) {
    if (err) {
      return res.status(500).send("Server error.");
    }
    res.render("edit.html", {
      student: stu,
    });
  });
});

/*
 * 处理编辑学生
 */
router.post("/students/edit", function (req, res) {
  var stu = req.body;
  Students.updateById(stu, function (err) {
    if (err) {
      return res.status(500).send("Server error.");
    }
    res.redirect("/students");
  });
});

/*
 * 处理删除学生
 */
router.get("/students/delete", function (req, res) {
  Students.deteleById(parseInt(req.query.id),function(err){
    if(err){
      return res.status(500).send("Server error.");
    }
    res.redirect("/students");
  })
});

// 3、把 router 导出
module.exports = router;

// module.exports = function (app) {
//   app.get("/students", function (req, res) {
//     fs.readFile("./db.json", "utf8", function (err, data) {
//       if (err) {
//         return res.status(500).send("Server Error");
//       }
//       res.render("index.html", {
//         students: JSON.parse(data).students,
//       });
//     });
//   });

//   app.get("/students/new", function (req, res) {});

//   app.get("/students/new", function (req, res) {});

//   app.get("/students/new", function (req, res) {});
// };
