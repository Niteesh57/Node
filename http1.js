

// get(options, function (res) {
//     var data = '';
//     res.on('data', function (chunk) {
//         data += chunk;
//     });
// });

var { get } = require('http');

var options = { host: 'www.google.com' };

const request = get(options)

console.log("writeable",request.writableEnded);

request.end()

console.log("writeable",request.writableEnded)

request.once('response',(res)=>{
    console.log("status",res.statusCode,res.statusMessage);
    console.log("writeable",request.socket.writable)
    console.log("readble",request.socket.readable)
    console.log("destroyed",request.socket.destroyed)
    console.log("writeableEnden", request.writableEnded)

    console.log('IP Address', `${request.socket.localAdress}`);
    console.log('Port',`${request.socket.localPort}`)
})