// function 

// syntax 
// function name(){}

function fun (){
    console.log("javascript");
    console.log("java");
    console.log("js");
}
fun();


// function types

// Function statement and Declaration -->parameter & argument

function js (b){
    console.log(b)
}
js("trendnologies");

// Function Expression --> function declear inside the variable

let exp =function j (k){
    console.log(k)
}
exp("expression");

// anonymous function --> this function does't need function name 

let ano =function (fun){
    console.log(fun);
}
ano("anonymous");
// Immediate Invoke Function expression -->IIFE --> it comes in a ()

(function(iife){
    console.log(iife)
})("invoke function");

// Arrow Function --> it is a singal ling function
// syntax 
// ()=>{}
let arro =(syn)=>{console.log(syn);}
arro("arrow function");


