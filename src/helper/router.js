const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const config = require('../config/defaultConfig')
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const tplPath = path.join(__dirname,'../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString());
const mime = require('./mime')

module.exports = async function (req,res,filePath){
  try{
    const stats = await stat(filePath);
    if(stats.isFile()){
      const contentType = mime(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type',contentType.type);
      fs.createReadStream(filePath).pipe(res);
    }else if(stats.isDirectory()){
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type','text/html');
      const dir = path.relative(config.root,filePath)
      const data = {
        title: path.basename(filePath),
        dir: dir? `/${dir}`: '',
        files: files.map(file=>{
          return {
            file,
            mime: mime(file)
          }
        })
      }
      res.end(template(data));
    }
  }catch(ex){
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');
    res.end(`${filePath} is not directory or file\n ${ex.toString()}`);
    return;
  }
}
