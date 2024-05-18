// var cal = require('./app')
// console.log("Hello");

// console.log(cal.add(2,3))//Local Model

// var a = require('assert');
// const { assert } = require('console');

// x = 5;
// y = 10;

// assert(x<y,["error"]);// if error message print

var assert = require("assert").strict;

// try{
//     assert.deepStrictEqual({a:1},{a:"1"})
// }
// catch(error){
//     console.log(error)
// }
x = 5;
y = 10;
try{
    assert.doesNotThrow(
        ()=>{
            throw new TypeError("Incorect");
        },
        /type/,
        'hi'
    )
}
catch(error){
    console.log(error)
    }