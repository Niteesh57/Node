var buf = require('buffer');

// Create and write a buffer of 10 bytes
var buf1 = new Buffer(10);
//buf1.fill(0x00);
buf1.fill(0x00);

console.log('Buffer 1 contents: ' + buf1.toString('hex'));
t = "Hello World"
b = new Buffer.from(t,'utf8')

console.log('Buffer 2:' + b.toString('hex'))

var buf2 = Buffer.alloc(900);


// Concatenate two buffers