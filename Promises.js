// Promise

function new1(){
    return new Promise ((resolved,rejected)=>{
        setTimeout(()=>{
            const new1 = true;
            if(new1){
                resolved("new1");
            }
            else{
                rejected("new1 Rejected");
            }
        },1000);
    });
}
function new2(){
    return new Promise ((resolved,rejected)=>{
        setTimeout(()=>{
            const new2 = true;
            if(new2){
                resolved("new2");
            }
            else{
                rejected("new2 Rejected");
            }
        },2000);
    });
}
function new3(){
    return new Promise ((resolved,rejected)=>{
        setTimeout(()=>{
            const new3 = false;
            if(new3){
                resolved("new3");
            }
            else{
                rejected("new3 Rejected");
            }
        },3000);
    });
}
new1().then(val =>{ console.log(val); return new2()})
    .then(val =>{ console.log(val); return new3()})
    .then(val =>{ console.log(val);})
    .catch((err)=>{
        console.log(err);
    })
