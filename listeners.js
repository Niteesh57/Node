// var event = require("events");
// var events = new event();

// function fun1(mes){
//     console.log(mes);
// }
// function fun2(mes){
//     console.log(mes);
// }

// events.on("sample",fun1);
// events.on("sample",fun1);
// events.on("sample",fun2);

// // console.log(events.getMaxListeners());
// // console.log(events.setMaxListeners(7));
// // console.log(events.getMaxListeners());

// events.prependOnceListener("sample","Hello world");

var event = require("events");
var events = new event.EventEmitter();

function fun1(mes) {
    console.log(mes);
}
function fun2(mes) {
    console.log(mes);
}

events.on('error',(mes)=>{
    console.log("Error Listener "+mes);
})
events.on('newListener',(mes)=>{
    console.log("Add Listener "+mes);
})
events.on('removeListener',(mes)=>{
    console.log("Removes Listener "+mes);
})

events.on("sample", fun1);
events.on("sample", fun1);
events.on("sample", fun2);

// Adding a one-time listener to the beginning of the listeners array
// events.prependListener("sample", (mes) => {
//     console.log("Prepended once listener: " + mes);
// });

// Emitting the event
events.off('sample',fun1)
events.emit("sample", "Hello World");

// Emitting the event again to show that the prepended once listener is not called again
events.emit("sample", "Hello World Again");
events.emit('error', new Error('Sample Error'));

