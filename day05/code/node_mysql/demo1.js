var mysql = require('mysql')

// 1. 创建连接
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'students'
})

// 2. 连接数据库
connection.connect();

// 3. 执行数据操作  query 方法 第一个参数为 sql 语句
connection.query('SELECT * FROM `students`',function(err,ret,fields){
  if(err) throw err;
  console.log(ret);
})

// connection.query('INSERT INTO `students` VALUES(NULL,"alice","18","1")',function(err,ret,fields){
//   if(err) throw err;
//   console.log(ret);
// })

// 4. 关闭连接
connection.end()
