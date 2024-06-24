var UDP = require('dgram');

const client = UDP.createServer('udp4');

port = 3000
host = 'localhost'
client.bind(port, host, function(){
    console.log('UDP server listening on ' + host + ':' + port);
    });
client.on("message",(message,info)=>{
    console.log('Received message from ' + info.address + ':' + info.port );
    console.log('Message: ' + message.toString());
})

const packet = new Buffer.from("Message from Client")

client.send(packet,port,host,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Welcome")
    }
});