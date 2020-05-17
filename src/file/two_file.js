module.exports.test = 'Two';
const one = require('./one_file');
console.log('这是two模块', one.test);
module.exports.test = 'wuyue_two'