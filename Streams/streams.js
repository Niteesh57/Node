 var {createReadStream} = require('fs');

 const stream = createReadStream('./tests.txt', {
     highWaterMark: 80,
     encoding: 'utf8'
 })

 stream.on('data', (result)=>{
     console.log(result.toString())
 })