/* 
    process.cwd()  返回脚本命令执行的路径
    process.argv   属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
                   如果需要访问 argv[0] 的原始值 第二个元素将是正在执行的 JavaScript 文件的路径。 其余元素将是任何其他命令行参数。
    process.argv0  node命令安装的路径

    execArgv       接收执行文件的参数//node --inspect  two_process.js one two=three four

    execPath       执行脚本所在的路径

*/
const { argv , argv0 ,execArgv , execPath ,env } = process;

process.argv.forEach((val,index)=>{
    console.log(`${index} ${val}`)
});

console.log(argv0);

console.log(execArgv);  

console.log(execPath); 

console.log(env); 

