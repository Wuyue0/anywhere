const fs = require('fs');
const promisfy = require('util').promisify;



const read = promisfy(fs.readFile);


// read('./index.js').then(data=>{
//     console.log(data.toString());
    
// }).catch(ex=>{
//     console.log(ex);
    
// })


async function test(){
    try{
        const  content = await read('./index.js');
        console.log(content.toString());
    }catch(err){
        console.log(err);
        
    }
}

test()

console.log(12313);
