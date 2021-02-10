# day06
#### 1、path 模块
- `basename`  获取一个路径中的文件名(包含后缀名)
- `dirname`  获取目录部分
- `extname` 获取扩展名
- `isAbsolute`  判断绝对路径
- `parse`  把一个路径转化为对象
- `join`  路径拼接

#### 2、node 中的其他成员
- `__dirname`  **动态**获取当前文件模块所属目录的绝对路径
- `__filename`  **动态**获取当前文件的绝对路径

#### 3、art-template 中的 include extend block
- `include` 包含
 - {{include './header.html'}}
- `extend block` 继承
 - {{block 'content'}} ... {{/block}}  // 挖坑
 - {{extend './layout.html'}}
 - {{block 'content'}} ... {{/block}}  // 填坑

#### 4、表单同步提交和异步提交
- 没有ajax，直接渲染了提示信息就出来了
- 异步提交页面不会刷新，交互方式更灵活

#### 5、express-session
- 安装
- 配置
- 使用 保存 req.session.xxx = xxxx  获取 req.seesion
