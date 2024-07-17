// Call back

console.log('Start');
function new1(callback){
    setTimeout(()=>{
        console.log("new1");
        callback();
    },1000)
}
function new2(callback){
    setTimeout(()=>{
        console.log("new2");
        callback();
    },2000)
}
function new3(callback){
    setTimeout(()=>{
        console.log("new3");
        callback();
    },3000)
}
new1(()=>{
    new3(()=>{
        new2(()=>{
            console.log("All done");
        })
    })
})

news = function () {
    console.log("Function Work");
}
news()

console.log("Done");