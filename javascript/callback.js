// // callback 

// function task1(callback){
//     setTimeout(() => {
//         console.log("fast");   
//         callback()
//     },5000);

// }
// function task2 (callback){
//     setTimeout(() => {
//         console.log("slow");
//     }, 2000);
// }

// task1 (task2);

// callback hell 

function mor(callback) {
    setTimeout(() => {
        console.log("good morning");
        callback()
    }, 3000);
    
}
function eve (callback){
    setTimeout(() => {
        console.log("good evening");
        callback()
    }, 2000);
}
function nig (callback){
    setTimeout(() => {
        console.log("good night");
        callback()
    }, 1000);
}
function mn (callback){
    setTimeout(() => {
        console.log("good midnight");
        callback()
    }, 500);
}
mor(()=>{
    eve(()=>{
        nig(()=>{
            mn(()=>{console.log("daily work")})
        })
    })
})

