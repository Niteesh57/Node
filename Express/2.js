var exs  = require('express');
var app  = exs();

var sample = require('./1');

app.use('/',sample);

app.listen(3000);