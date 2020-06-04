# anywhere
node 静态资源服务器


#使用方法



<!-- range  -->

客户端请求的格式为 range: bytes = [start]-[end]
服务端响应头 Accept-Ranges:bytes 
            Content-Range:bytes start-end/total

<!-- 缓存 -->

