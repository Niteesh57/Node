const fs = require('fs');

console.log("start")
setTimeout(()=>{
    fs.readFile('./Express/Text.txt','utf-8',()=>{
        console.log('File Read Successfully')
        fs.writeFile('./Express/Text.txt','New Text',{encoding:'utf-8', flag: 'a'},()=>{
            console.log('File Written Successfully')
        });
});
},1000);

console.log("end")