var fs = require('fs')

fs.rmdir('new',{recursive:true, maxRetries:5},(err)=>{
    if(err){
        console.log(err)
        }
        else{
            console.log('folder deleted')
        }
})