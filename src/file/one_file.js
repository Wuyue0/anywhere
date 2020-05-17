module.exports.test = 'One';
const two = require('./two_file');


console.log('这是one模块', two.test);


module.exports.test = 'wuyue_one'