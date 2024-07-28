const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'}); // MIME Types
    console.log('Browser');
    res.end('<h1>Hello World\n</h1>');
}).listen(3000)