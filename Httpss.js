var http = require('http2');

http.createServer((req,res)=>{
    res.setHeader('content-type','text/plain');
    res.end('Hello World');
}).listen(3000)