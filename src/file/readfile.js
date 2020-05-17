const fs = require('fs');

fs.readFile('./readfile.js','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})


const readersync = fs.readFileSync('./one_path.js',{
    encoding: 'utf8'
})
console.log(readersync)


console.log('执行顺序');

