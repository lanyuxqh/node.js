var path = require('path')

console.log(path.basename('c:/a/b/d/index.js'));  // index.js  获取一个路径中的文件名(包含后缀名)
console.log(path.basename('c:/a/b/d/index.js','.js'));  // index  传第二个参数，获取文件名(去掉后缀名)

console.log(path.dirname('c:/a/b/d/index.js'));   // c:/a/b/d   获取目录部分

console.log(path.extname('c:/a/b/d/index.js'));   // .js  获取扩展名

console.log(path.isAbsolute('c:/a/b/d/index.js'));  // true  判断绝对路径
console.log(path.isAbsolute('d/index.js'));  // false
console.log(path.isAbsolute('/d/index.js'));   // true
console.log(path.isAbsolute('./d/index.js'));  // false

console.log(path.parse('c:/a/b/d/index.js'));  // 把一个路径转化为对象
// { root: 'c:/',
//   dir: 'c:/a/b/d',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index' }

console.log(path.join('c:/a','b'));  // c:\a\b  win \  mac /    路径拼接
console.log(path.join('c:/a/','/b'));  // c:\a\b  避免自己手动拼接出现错误
