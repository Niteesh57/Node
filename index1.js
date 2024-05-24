// sta = new Buffer.alloc(256);

// for (i=65,j=0;i<90,j<26;i++,j++){
//     sta[j] = i
// }

// console.log(sta.toString('ascii',1,4))

var a = Buffer.from('Hello Hi')
var b = Buffer.from("Hi where")

a.copy(b,0,3)
console.log(b.toString())