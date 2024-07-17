const HTTP = require('http');

const server = HTTP.createServer((req,res)=>{
    if (req.url == '/'){
        // res.statusCode = 301;
        // res.setHeader('Location','/new');
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.write("Data was Writing")
        res.end();
    }
    else if (req.url == '/new'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.write("Data was Replaced")
        res.end();
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.write("Page not found")
        res.end();
    }
}).listen(3000)