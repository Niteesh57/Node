var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(3000,()=>{
    var option = http.request({
        host: 'localhost',
        port: 3000,
    });
    console.log(option.protocol);
});


