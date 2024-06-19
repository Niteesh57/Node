// const http2 = require('http2')
// const fs = require('fs')

// const option = {
//     key: fs.readFileSync('server-key.pem'),
//     cert: fs.readFileSync('server-cert.pem'),
// }

// const server = http2.createServer(option);

// server.on('strem',(strem,reqHed)=>{
//     strem.respond({
//         ':status':200,
//         ':content-type': 'text/plain',
//     });
//     strem.write('hello');
//     const http2session = strem.session;

//     const status = http2session.socket;
    
//     strem.end(status);

//     http2session.on('close',()=>{
//         console.log('session close');
//         })

// })

const http2 = require('http2');
const fs = require("fs");

const options={
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('server-cert.pem'),
};

const server = http2.createServer(options);

server.on('stream',(stream,requestHeaders)=>{
    stream.respond({
        ':status':200,
        'content-type':'text/plain'
    });
    stream.write("Hello...");
    const http2session = stream.session;

    const status = http2session.encrypted;
    
    if(status)
        stream.end("Associated"+"With TLS Socket");
    else
        stream.end("Associated:"+"With Other Socket");

    server.close(()=>{
        console.log("Server Local...Close");
    })

});

server.listen(5000);

const client = http2.connect('http://localhost:5000');

const req = client.request({
    ':method':'GET',':path':'/'
});

req.on('response',(responseHeaders)=>{
    console.log("Status: "+ +responseHeaders[":status"]);
});

req.on('data',(data)=>{
    console.log("Received: %s",data.toString().replace(/(\n)/gm, " "));
});

req.on("end",()=>{
    client.close(()=>{
        console.log("Client Closed...");
    })
});


server.listen(8000);

const clients = http2.connect('http://localhost:5000')

const reqs = client.request({
    ':method': 'GET',
});

reqs.on('response',(resHead)=>{
    console.log(resHead[":status"]);
});

reqs.on('data',(data)=>{
    console.log(data.toString().replace(/(\n)/gm," "));
})

reqs.on('end',()=>{
    client.close(()=>{
        console.log('client close');
    })
})