var exs = require("express");
var app = exs.Router();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

module.exports = {app};