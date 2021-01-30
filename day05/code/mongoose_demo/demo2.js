var mongoose = require("mongoose");

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect("mongodb://localhost/test");

// 2. 设计文档结构（表结构）
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
});

// 3. 将文档结构发布为模型
var Student = mongoose.model("student", schema);

// // 1.增
// new Student({
//   name:'alice',
//   age:18,
//   gender:1
// }).save(function(err,ret){
//   if(err){
//     console.log('保存失败');
//   }else{
//     console.log('保存成功');
//   }
// })

// // 2.查
// Student.find(function (err, ret) {
//   if (err) {
//     console.log("查询失败");
//   } else {
//     console.log(ret);
//   }
// });

// Student.find(
//   {
//     name: "alice",
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("查询失败");
//     } else {
//       console.log(ret);
//     }
//   }
// );

// // 3.删
// Student.remove({
//   name:'alice'
// },function(err,ret){
//   if(err){
//     console.log('删除失败');
//   }else{
//     console.log('删除成功');
//   }
// })

// // 4.改
// Student.findByIdAndUpdate(
//   "6014c6675b419b2e08914dd6",
//   {
//     age: 20
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("更新失败");
//     } else {
//       console.log("更新成功");
//     }
//   }
// );
