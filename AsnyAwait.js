// Asny/Await
console.log('start');
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
            const new2 = false;
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
            const new3 = true;
            if(new3){
                resolved("new3");
            }
            else{
                rejected("new3 Rejected");
            }
        },3000);
    });
}

async function main(){
    try{
        const result1 = await new1();
        console.log(result1);
        const result2 = await new2();
        console.log(result2);
        const result3 = await new3();
        console.log(result3);

    }
    catch(err){
        console.error(err);
    }
}
main()
console.log("Done");


