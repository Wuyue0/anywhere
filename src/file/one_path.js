/* 
   nodejs path 模块

    path.basename(path[,ext]); 方法返回 path 的最后一部分
    path.dirname(path);        方法返回 path 的目录名
    path.extname(path);        方法返回 path 的扩展名
    path.parse(path)           方法返回一个对象，其属性表示 path 的重要元素
    path.format(pathObject)    法从对象返回路径字符串
    path.isAbsolute(path)      方法检测 path 是否为绝对路径。
    path.join(path)            方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。 
    path.relative(from, to)    方法根据当前工作目录返回 from 到 to 的相对路径。
    path.resolve([...paths])   方法将路径或路径片段的序列解析为绝对路径。 ./ 输出当前脚本执行命令的路径
*/

const path = require('path');


const basename = path.basename('/home/user/dir/file.txt'); //返回file.txt
console.log('=========basename==========',basename);

const dirname = path.dirname('/home/user/dir/file.txt');  //返回 /home/user/dir
console.log('=========dirname==========',dirname);

const extname = path.extname('/home/user/dir/file.txt');  //返回 .txt
console.log('=========extname==========',extname);


const parse = path.parse('/home/user/dir/file.txt');
console.log('=========extname==========',parse);        
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }


const format = path.format({
    root: '/',
    dir: '/home/user/dir',
    ext: '.txt',
    name: 'wuyue'
})
console.log('=============format==========',format);


const join =path.join('.')
console.log('==============join=========',join);


path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');  // 返回: '../../impl/bbb'

const resolve = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.log('==================resolve=============',resolve);
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'

const resolve1 = path.resolve('./');

console.log(resolve1)