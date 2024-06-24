var event = require('events');

const events = new event();

// events.on("sample",(mes)=>{
//     console.log(mes);
// })

function fun1(mes){
    console.log(mes);
}
function fun2(mes){
    console.log(mes);
}

events.on("sample",fun1);
events.on("sample",fun1);
events.on("sample",fun2);

events.emit("sample","Hello World");

events.removeListener("sample",fun1);
events.removeAllListeners("sample");

events.emit("sample","Welcome to nodejs");