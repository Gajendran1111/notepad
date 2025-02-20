// promise

// syntax 

// return new promise (()=>{})

// go to the shop 
// buy the list of products 
// get back the changes

function go (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shop = true
            if(shop){
                resolve("going to the shop")
            }
            else {
                reject("you did not go to the shop")
            }
           
        }, 5000);
        
    })
}
function list (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product =false
            if (product){
                resolve("buying the products")
            }
            else {
                reject("you did not buy the products")
            }
            
        }, 3000);
    })
}
function changes (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const money = false
            if (money){
                resolve("get the changes back")
            }
            else {
                reject("did not get the money back")
            }
           
        }, 2000);
    })
}

// go()
// .then(value => {console.log(value); return list ()})
// .catch(value => {console.log(value); return changes()})
// .catch(value => {console.log(value);console.log("done all work")})

async function goingshop (){
    try {
        const a = await go ()
        console.log (a)
        const b = await list()
        console.log(b)
        const c = await changes()
        console.log(c);
        
    } catch (error) {
        console.log(error);
        
    }
}
goingshop();


