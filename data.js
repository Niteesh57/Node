var buf = require('buffer');

var buf1 = new Buffer(10);

console.log('Buffer 1 contents: ' + buf1.toString('hex'));
t = "Hello World"
b = new Buffer.from(t,'utf8')

console.log('Buffer 2:' + b.toString('hex'))

var buf2 = Buffer.alloc(900);