// var fs = require('fs');

// var log = new fs.createWriteStream('./out.log')
// var error = new fs.createWriteStream('./error.log')

// const obj = new console.Console(log,error);

// obj.log("Hi")
// obj.error(new Error('Undifiend'));

// const n = 'JDCK'
// obj.warn(n);

var console = require('console');

console.debug("hI %s",6);
console.debug("hI %s:: and %d","demo()",6);

var a = true;
console.custom_debug = function (messsage){
    if (a==true){
        console.log(messsage)
    }
}
console.custom_debug('error')
