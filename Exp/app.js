var exp = require('express');
const app = exp();

app.use(exp.static('./public/view'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/view/login.html');
    // res.send('Hello World');
})
app.post('/data',(req,res)=>{
    console.log(req.body);
    res.send('Data Received');
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})