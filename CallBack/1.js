const show = (callback) =>{
    console.log(callback);
}

const first = (callback) =>{
    setTimeout(()=>{
        show('First')
        callback();
    })
}

const second = () =>{
    show(('second'))
}

first(second)