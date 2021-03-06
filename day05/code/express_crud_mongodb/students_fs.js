/* *
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 *
 * 这里才是我们学习 Node 的精华部分：奥义之所在
 * 封装异步 API
 */

var fs = require("fs");

var dbPath = "./db.json";

/**
 * 获取学生列表
 * @param  {Function} callback 回调函数
 */
exports.find = function (callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  });
};

/**
 * 根据 id 获取学生信息对象
 * @param  {Number}   id       学生 id
 * @param  {Function} callback 回调函数
 */
exports.findById = function (id, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    var stu = students.find(function (item) {
      return item.id == id;
    });
    callback(null, stu);
  });
};

/**
 * 添加保存学生
 * @param  {Object}   student  学生对象
 * @param  {Function} callback 回调函数
 */
exports.save = function (student, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    student.id = students[students.length - 1].id + 1;
    students.push(student);
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
    });
    callback(null);
  });
};

/**
 * 更新学生
 */
exports.updateById = function (student, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    student.id = parseInt(student.id);
    var stu = students.find(function (item) {
      return item.id === student.id;
    });
    for (var key in student) {
      stu[key] = student[key];
    }
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};

/**
 * 删除学生
 */
exports.deteleById = function (id, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id);
    });
    students.splice(deleteId, 1);
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
