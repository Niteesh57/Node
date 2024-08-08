const express = require('express');
const app = express();
const logs = require('./2');

app.use(logs);



app.get('/', (req,res)=>{
    res.send('Home')
})
app.get('/about', (req,res)=>{
    res.send('about')
})
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})