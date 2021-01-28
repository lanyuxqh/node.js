# day04
#### 1、Express
- 在 express 中配置 art-template 并使用
  - npm 安装 art-template express-art-template
  - app.engine("html", require("express-art-template"));
  - res.render("index.html", { comments: comments }); //默认区view目录找index.html
  - app.set('views',目录路径)  //修改默认
- 用 express 修改留言板小案例
  - 在 express 中获取表单 get 请求参数
    - req.query
  - 在 express 中获取表单 post 请求体数据
    - 安装第三方包 body-parser 
    - app.use(body_parser.urlencoded({ extended: false }))
    - app.use(body_parser.json());
    - req.body

##### 2、CRUD
- 初步,搭建项目
  - npm init / npm install xxx
  - app.js 配置开放静态资源、配置模板引擎、配置 body-parser 
  - index.html 模板处理
  - db.json 文件读取数据
  - 简单路由 /students 渲染出来
- 设计路由 
| 请求方法 | 请求路径         | get 参数 | post 参数                      | 备注             |
| -------- | ---------------- | -------- | ------------------------------ | ---------------- |
| GET      | /studens         |          |                                | 渲染首页         |
| GET      | /students/new    |          |                                | 渲染添加学生页面 |
| POST     | /studens/new     |          | name、age、gender、hobbies     | 处理添加学生请求 |
| GET      | /students/edit   | id       |                                | 渲染编辑页面     |
| POST     | /studens/edit    |          | id、name、age、gender、hobbies | 处理编辑请求     |
| GET      | /students/delete | id       |                                | 处理删除请求     |
|          |                  |          |                                |                  |
- 路由模块的提取 router.js
- 处理添加页面 new.html 编辑页面 edit.html
- 数据操作模块的提取 students.js  搭建初步框架
  - 回调函数：获取异步操作的结果(重点)
  - find
  - findById
  - save
  - updataById
  - deletById
- 具体实现
  - 通过路由收到请求
  - 接收请求中的数据(get/post)-(req.query,req.body)
  - 调用数据操作API处理数据
  - 根据操作结果给客户端发送响应
