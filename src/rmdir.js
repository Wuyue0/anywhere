const fs =require('fs');


fs.rmdir('./test',(err)=>{
    console.log('删除文件夹成功!',err);

})
