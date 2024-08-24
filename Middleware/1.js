const express = require('express');
const app = express();
const logs = require('./2');
const asserts = require('assert')

app.use(logs);


app.use((req,res)=>{
    res.send("Oops...")
})
app.get('/data', (req,res)=>{
    res.send('Data')
})
app.get('/about', (req,res)=>{
    res.send('about')
})
app.get('/about', (req,res)=>{
    res.send('about')
})
app.get('/about', (req,res)=>{
    res.send('about')
})
app.get('/about', (req,res)=>{
    res.send('about')
})
app.get('/', (req,res)=>{
    res.send('Home')
})
app.get('/about', (req,res)=>{
    res.send('about')
})
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})