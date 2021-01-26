# day03
#### 1、exports 与 module.exports
- module是一个对象，exports是module中的一个空对象
- exports是module.exports的一个引用
- 最后返回的是module.exports
- 真正使用
  - 导出多个成员：`exports.xxx=xxx`; 或者 `module.exports={}`;
  - 导出单个成员：`module.exports=xxx`;

#### 2、require 加载规则   [深入浅出 Node.js（三）：深入 Node.js 的模块机制](https://www.infoq.cn/article/nodejs-module-mechanism/)
- 优先从缓存中加载。 可以直接拿到接口对象，不会重复执行里面代码。目的：提高模块加载效率
- 核心模块。 本质也是文件
- 路径形式的文件模块。   `require('./foo.js')`  .js 后缀名可以省略
- 第三方模块。  必须通过 npm 来下载
  - node_modules/art-template/
  - node_modules/art-template/package.json
  - node_modules/art-template/package.json main
  - index.js 备选项
  - 进入上一级目录找 node_modules
  - 按照这个规则依次往上找，直到磁盘根目录还找不到，最后报错：Can not find moudle xxx

#### 3、npm
- [npm网站](https://www.npmjs.com/)
- npm命令行工具
- 常用命令
  - npm init -y 
  - npm install 包名    npm install 包名 --save(保存依赖项)
  - npm i 包名  npm i 包名 -S
  - npm uninstall 包名
  - npm help  npm 命令 --help
- cnpm 淘宝镜像

#### 4、express
- 一个保持最小规模的灵活的 Node.js Web 应用程序开发框架
- 安装
- 使用
  - 创建服务 `express()` `.get` `.listen`
  - 公开指定目录 `.use`
  - 在express中使用模板引擎有更好的方式，`res.render('文件名',{模板对象})`，需要配置