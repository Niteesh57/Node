var express = require('express');
var path = require('path');
app = express();

app.get('/', (req,res)=>{
    res.render('view');
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/view'))


app.listen(3000);
