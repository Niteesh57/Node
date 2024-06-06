var fs = require('fs');
//Ascy
// fs.readFile('nerror.log', (err,data)=>{
//     if(err){
//         console.log(err)
//         }else{
//             console.log(data.toString())
//             }
// })

//sync
// data = fs.readFileSync('error.log')

// console.log(data.toString())
// buff = new Buffer.alloc(1064);
// fs.open('error.log','r+',(err,data)=>{
//     if(err){
//         console.log(err)
//         }else{
//             fs.read(data,buff,0,buff.length,0,(err,data)=>{
//                 if(err){
//                     console.log(err)
//                     }else{
//                         console.log(data)
//                         }
//             })
//             }
// })

// getData();

// s = fs.existsSync('outb.log')
// console.log(s ? 'exist' : 'not exist');

// function getData(){
//     fs.readdirSync(__dirname).forEach(file=>{
//         console.log(file)
//     })
// }

// var path = require('path');

// fs.mkdir(path.join(__dirname,'new'),(err,data)=>{
//     if(err){
//         console.log(err)
//         }else{
//             console.log('directory created' + data)
//             }
// });

var path = require('path');

fs.mkdir(path.join(__dirname,'new'),{recursive:true},(err,data)=>{
    if(err){
        console.log(err)
        }else{
            console.log('directory created' + data)
            }
});
