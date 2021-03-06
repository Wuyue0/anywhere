const yargs = require('yargs');
const Server = require('./app.js')

const argv = yargs
    .usage('anywhere [options]')
    .option('p',{
        alias: 'port',
        describle: '端口号',
        default: 8000
    })
    .option('h',{
        alias: 'hostname',
        describle: '主机名',
        default: '127.0.0.1'
    })
    .option('d',{
        alias: 'root',
        describle: 'root path',
        default: process.cwd()
    })
    .version()
    .alias('v','version')
    .help()
    .argv;


    const server = new Server(argv);
    server.start();



    