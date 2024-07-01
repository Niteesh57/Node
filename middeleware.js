var exp = require('express');
var app = exp();

// app.get("/",(req,res,next)=>{
//     console.log("Start");
//     next();
// },(req,res)=>{
//     res.send("Hello")
// })
app.use('/',function(req,res,next){
    console.log('start');
    next();
})
app.get('/',(req,res,next)=>{
    res.send('Hello')
    next();
})
app.use('/',function(req,res){
    console.log('end');
})
app.listen(3000);