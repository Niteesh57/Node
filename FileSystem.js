const fs = require('fs');
const path = require('path')
x = path.join('./Express','Text.txt');
console.log(x)

first = fs.readFileSync('./Express/Text.txt','utf8');

fs.writeFileSync('./Express/New.txt',
    first.toUpperCase() + '\n' + 'added by Node.js',
    {flag:'a'} // append mode
)
console.log(first)
