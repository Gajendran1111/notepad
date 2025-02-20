// settime out--> it gives the value asychonours order

function task1(){
    setTimeout(() => {
        console.log("fast");
        
    },5000);
}
function task2 (){
    setTimeout(() => {
        console.log("slow");
        
    }, 2000);
}

task1 ();
task2 ();