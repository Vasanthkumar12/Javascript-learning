async function transaction() {
    return "Hello"
}
transaction()
console.log(transaction()) // A async function returns a Promise. !!!! WOW !!!! So we can use this async instead of using Promise
transaction().then((msg) => console.log("msg = " + msg)) // Here we don't want to use the then also. To acheive this we can use the "await"

// To resolve the use of "then", we use "await"
let reachJohn = new Promise((resolve, reject) => {
    // let sts = false
    let sts = true
    if(sts) {
        setTimeout(resolve, 3000, "John is reached...")
    }
    else {
        reject("John not reached")
    }
})
async function transaction1() {
    console.log("Inside async")
    try{
        let res = await reachJohn // here the use of await is, it waits till the reachJohn Promise will be fullfil whether it is resolved or rejected.
        console.log("res = " + res)
        console.log("bye")
    }
    catch(err) {
        console.log(err)
    }
}

transaction1()

// Practices

function tossCoin() {
    return new Promise((res, rej) => {
        const rand = Math.floor(Math.random() * 2)
        console.log("rand = " + rand)
        if(rand == 1) {
            setTimeout(res, 2000, "Resolved")
        }
        else {
            rej("rejecteddddd.....")
        }
    })
} 
    

async function tossCoinRes() {
    try{
        console.log("toss Result")
        let res = await tossCoin()
        console.log("result = " + JSON.stringify(res))
    }
    catch(err) {
        console.log("result = Rejected")
    }  
}

tossCoinRes()

