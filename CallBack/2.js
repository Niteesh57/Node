

n = new Buffer.alloc(100)
n1 = 'hello'

for (i=0;i<n1.length;i++){
    n[i] = n1.charCodeAt(i)
}

console.log(n.toString('utf8'))