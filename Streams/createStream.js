var http = require('http');
var fs = require('fs')


http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    // fs.readFile('./tests.txt',(err,data)=>{
    //     if (err) throw err;
    //     res.end(data);
    // });
    first = fs.createReadStream('./tests.txt','utf8')
    first.on('open',()=>{
        first.pipe(res)
    });
    first.on('error',(err)=>{
        res.end(err);
    });
}).listen(3000);