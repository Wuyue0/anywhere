// 默认的配置文件

module.exports = {
  root: process.cwd(),
  hostname: '127.0.0.1',
  port: 8080,
  conpress: /\.(html|js|css|md)/,
  cache: {
    maxAge: 10,
    expiress: true,
    cacheControl: true,
    lastModified: true,
    etag:true
  }
}


