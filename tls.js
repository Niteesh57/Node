// var os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// // console.log(os.Eol());
// console.log(os.cpus());
// // console.log(os.endiannass());
// console.log(os.version());


var tls = require('tls');
var fs = require('fs');

const port = 3000;
const host = 'localhost';

var options = {
    key: fs.readFileSync('server-key.pem'),
    certificate: fs.readFileSync('server-csr.pem'),
    minVersion: 'TLSv1.2',
}

var server = tls.createServer(options, (socket) => {
  console.log('server connected');
  socket.on('data', (data) => {
    console.log('Data:', data.toString());
  });
  socket.on('end', () => {
    console.log('server disconnected');
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(port, host, () => {
  console.log("server is running on port", port);
});

var client = tls.connect(port, host, options, () => {
  console.log("Client connected", client.authorized ? 'authorized' : 'unauthorized');
  client.write("Hello Server");
  client.end();
  client.on('data', (data) => {
    console.log('Received:', data.toString());
  });
  client.on('end', () => {
    console.log('Client disconnected');
  });
});

client.on('error', (err) => {
  console.error('Client error:', err);
});


server.listen(port,host,()=>{
    console.log("server is running on port",port)
});

var client = tls.connect(port,host,options,()=>{
    value = tls.rootCertificates;
    console.log("Root Certificate" + value[0]);
    client.write("Hello Server");

    client.end(()=>{
        console.log("client end");
    })
})



