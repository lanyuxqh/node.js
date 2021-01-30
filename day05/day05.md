# day05
#### 1、MongoDB
- 基本概念
  - 非关系型数据库,键值对
  - 数据库  test
  - 集合  students
  - 文档  {name: '张三',age: 18}
  ```javscript
  {
    admin:{

    },
    test:{  // 数据库 - 数据库
      students：[  // 集合 - 表
        {name: '张三',age: 18},  // 文档 - 记录
        {name: '李四',age: 19}
      ]
    }
  }
  ```
  - 一个数据库可以有多个集合，一个集合可以有多个文档
  - 文档结构很灵活，没有任何限制
- 安装 配置 测试
- 开启 停止 连接 退出
- 基本命令
  - `show dbs`  查看所有数据库
  - `db`  当前数据库
  - `use 数据库名称`  切换，没有会创建
  - `db.xxx.insertOne({key:value})` 插入数据
  - `show collections`  查看该数据库的集合
- 在 node 中操作 MongoDB
  - 使用官方的 mongodb 包
  - 或者 使用第三方 mongoose (基于官方做了再一次封装) *
    - 引包 `const mongoose = require('mongoose');`
    - 连接数据库  `mongoose.connect('mongodb://localhost/test');`
    - 设计文档结构  `new mongoose.Schema({})`
    - 将文档结构发布为模型   `mongoose.model()`  返回模型构造函数
    - 使用模型构造函数 操纵 数据  
      - 增 
        - `new xxx({}).save(function(err,ret){})`
      - 查
        - `find(function(err,ret){})`  查询所有
        - `find({条件},function(err,ret){})`  按条件查询所有
        - `findOne({条件},function(err,ret){})`   按条件查询单个
      - 删
        - `remove({条件},function(err,ret){})` 
      - 改
        - `findByIdAndUpdate(id,{修改},function(err,ret){})`
        - 其他 API

#### 2、使用Node操作MySQL数据库
- 引 mysql 包，调用API

#### 3、Promise
- 解决回调地狱嵌套，所以 ES6 中新增了一个API `Promise`
- Promise 是一个构造函数(容器)
  - 内部传异步任务，默认pending 状态
  - resolve
  - reject
- then 获取容器结果，成功或失败 
  - 传 resolve 和 reject
  - 支持链式调用
  - 可以在 then 方法中，返回一个 promise 对象，然后在下一个 then 方法中获取 上一个 then 返回的 promise 对象的状态结果
- 场景.html