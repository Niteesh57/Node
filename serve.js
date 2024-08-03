var exp = require('express');
var app = exp()

data = [
    {
        "name": "Maximillia Kreiger",
        "info": {
            "title": "Mrs.",
            "age": 49,
            "phone": "750.317.7971",
            "email": "electa37@gmail.com"
        }
    },
    {
        "name": "Aisha Ankunding",
        "info": {
            "title": "Ms.",
            "age": 30,
            "phone": "254.866.7204 x8589",
            "email": "vhaag@yahoo.com"
        }
    },
    {
        "name": "Amparo Roberts",
        "info": {
            "title": "Prof.",
            "age": 23,
            "phone": "1-650-405-9666",
            "email": "ksanford@gmail.com"
        }
    },
    {
        "name": "Carmella Littel",
        "info": {
            "title": "Dr.",
            "age": 26,
            "phone": "776.670.0944",
            "email": "tklocko@gmail.com"
        }
    },
    {
        "name": "Thalia Treutel",
        "info": {
            "title": "Prof.",
            "age": 43,
            "phone": "(409) 323-5904",
            "email": "zena01@gmail.com"
        }
    },
    {
        "name": "Yazmin Wilderman",
        "info": {
            "title": "Mr.",
            "age": 56,
            "phone": "698-280-1499 x357",
            "email": "brannon24@gmail.com"
        }
    },
    {
        "name": "Laisha Champlin",
        "info": {
            "title": "Mr.",
            "age": 27,
            "phone": "+17274830227",
            "email": "nmorar@hotmail.com"
        }
    },
    {
        "name": "Birdie Bechtelar",
        "info": {
            "title": "Mrs.",
            "age": 52,
            "phone": "860.347.3480",
            "email": "stewart11@yahoo.com"
        }
    },
    {
        "name": "Twila Terry",
        "info": {
            "title": "Dr.",
            "age": 29,
            "phone": "1-504-744-2844",
            "email": "qkrajcik@gmail.com"
        }
    },
    {
        "name": "Edmund Bartell",
        "info": {
            "title": "Mr.",
            "age": 41,
            "phone": "797-869-0770 x419",
            "email": "orville.oberbrunner@hotmail.com"
        }
    },
    {
        "name": "Karen Ritchie",
        "info": {
            "title": "Prof.",
            "age": 31,
            "phone": "1-552-220-1394",
            "email": "rodriguez.winifred@gmail.com"
        }
    },
    {
        "name": "Cristobal Olson",
        "info": {
            "title": "Mr.",
            "age": 32,
            "phone": "+1.234.480.8980",
            "email": "josue40@yahoo.com"
        }
    },
    {
        "name": "Alexandra Legros",
        "info": {
            "title": "Dr.",
            "age": 37,
            "phone": "424-823-2607",
            "email": "lbartoletti@yahoo.com"
        }
    },
    {
        "name": "Sydnee Wintheiser",
        "info": {
            "title": "Mr.",
            "age": 44,
            "phone": "353-831-5706 x65241",
            "email": "icrist@hotmail.com"
        }
    },
    {
        "name": "Octavia Harris",
        "info": {
            "title": "Dr.",
            "age": 20,
            "phone": "(785) 547-3884",
            "email": "pollich.jazmin@hotmail.com"
        }
    },
    {
        "name": "Libby Daugherty",
        "info": {
            "title": "Dr.",
            "age": 37,
            "phone": "470.491.0290 x364",
            "email": "lcasper@gmail.com"
        }
    }
]

app.get('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Users</h1><a href="/api">Prodects</a><br><a href="/api/names">Prodects Names</a><br>');
    res.end()
})
app.get('/api',(req,res)=>{
    res.json(data);
    res.end()
})
app.get('/api/names',(req,res)=>{
    const multiProdects = data.map((data)=>{
        return data.name
    })
    return res.json(multiProdects)
})
app.get('/api/prodect/:age', (req, res) => {
    const age = parseInt(req.params.age);// Extract and convert the age parameter from the URL
    console.log(age)
    const singleProdect = data.find((data) => data.info.age === age);
    if (singleProdect) {
        res.json(singleProdect);
    } else {
        res.status(404).send('Product not found');
    }
});


app.listen(5000);