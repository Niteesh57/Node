var exp = require('express');
const app = exp();

app.get('/',(req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'});
    res.send('Hello World')
})
app.get('/about',(req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'});
    res.send('About Page')
})


app.listen(3000,()=>{
    console.log('server is running on port 3000');
});