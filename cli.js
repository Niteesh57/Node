var UDP = require('dgram');

const server = UDP.createServer('udp4');
port = 3000

server.on("lisining..", function(){
    const address = server.address()
    console.log("Server is listening on port " + "Host"+ address.address + "port" + address.port );
    });
server.on("message",(message,info)=>{
    console.log('Message: ' + message.toString());

    const response = Buffer.from("Message came")
    server.send(response,info.port,info.address,function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Response sent");
        }
    });
});

server.bind(port)