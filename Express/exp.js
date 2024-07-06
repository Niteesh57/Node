var exp = require('express');
app = exp();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.listen(3000,(err)=>{
    if(err){
        console.log('error');
    }
    console.log("Server is running on port 3000");
});