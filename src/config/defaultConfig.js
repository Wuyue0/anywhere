module.exports = {
  root: process.cwd(),
  hostname: '127.0.0.1',
  port: 9527,
  conpress: /\.(html|js|css|md)/,
  cache: {
    maxAge: 600,
    expiress: true,
    cacheControl: true,
    lastModified: true,
    etag:true
  }
}
