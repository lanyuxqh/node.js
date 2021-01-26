# day01
#### 1、为什么学习Node？

帮助我们打开服务端这个“黑盒子”

#### 2、Node.js是什么？

- Node.js是一个JavaScript运行时环境，可以解析和执行JavaScript代码（现在的JS可以脱离浏览器运行）

- Node.js中的JavaScript没有BOM和DOM（对比浏览器中的JavaScript=EcmaScript+BOM+DOM)，为JavaScript提供了一些服务器级别的操作**API**（文件读写、网络的构建、网络通信、http服务器等）
- Node.js特性：事件驱动、非阻塞IO模型（异步）、轻量和高效
- npm基于Node.js
- 构建于Chrome的V8引擎之上

#### 3、Node.js能做什么？

- Web服务器后台
- 命令行工具（npm、hexo）

#### 4、文件读写、简单的http服务(代码)

#### 5、node中js核心模块系统
- require是一个方法，作用：1)用来加载模块并执行里面的代码；2)拿到被加载文件模块导出的接口对象(exports:默认是空对象)。
- 模块有三种：具名的核心模块(fs、http)、用户自己编写的文件模块(./xxx.js)、第三方模块(art-template)
- 只有模块作用域，没有全局作用域

#### 6、http知识点
- ip 端口号
- Content-Type
- 通过网络发送文件




