// var fs = require('fs')

// fs.rmdir('new',{recursive:true, maxRetries:5},(err)=>{
//     if(err){
//         console.log(err)
//         }
//         else{
//             console.log('folder deleted')
//         }
// })

// var app = require('./Dns.js');

// x = new app()

// x.data()

var a = new URLSearchParams('abc=nskcnsdc&cdf=nc,cnszncnz&ghi= c,c');

for (var p of a.entries()){
    console.log(p[0],p[1])
}