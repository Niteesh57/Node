var fs = require('fs');

for (i = 0; i<1000; i++){
    fs.writeFileSync('./tests.txt',`Hello World ${i} \n`, {flag:'a'})
}
