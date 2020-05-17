const fs = require('fs');


const content = Buffer.from('this is wuyue !')

fs.writeFile('./test',content,(err)=>{
    if(err){
        console.log('写入文件出错了')
        return 
    }

    console.log('文件写入成功');
    
})