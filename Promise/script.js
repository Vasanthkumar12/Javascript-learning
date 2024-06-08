// Promise - way 1

let srstcbooking = new Promise((resolve, reject) => { // resolve and reject are callback functions
    let status = true
    if(status) {
        resolve()
    }
    else {
        reject()
    }
})

srstcbooking.then(()=>console.log("Thanks for booking a Ticket...")) // We should handle the resolve code inside the then()
.catch(()=>console.log("Thanks for trying to book a Ticket...")) // We should handle the resolve code inside the then()

// Promise - way 2

let srstcbooking2 = new Promise((resolve, reject) => { 
    let status = true
    if(status) {
        // resolve()
        resolve(850) // we can also pass arguments also
    }
    else {
        reject()
    }
})

srstcbooking2
// .then(success) // we call another func
.then((amt) => console.log(`Thanks for booking a ${amt} Ticket...`))
.catch(failure)

function success() {
    console.log("Thanks for booking a Ticket...")
}

function success(amt) {
     
}

function failure() {
    console.log("Thanks for trying to book a Ticket...")
}

// Promise - way 3 -> we can return a Promise also

function srstcbooking3() {
    return new Promise((resolve, rejct) => {
        let status = false
        if(status) {
            resolve()
        }
        else {
            rejct()
        }
    })
}

srstcbooking3().then(()=> console.log("I am from resolve..."))
.catch(()=> console.log("I am from reject..."))


function tossCoin() {
    return new Promise((res, rej) => {
        const rand = Math.floor(Math.random() * 2)
        if(rand == 1) {
            res()
        }
        else {
            rej()
        }
    })
}

tossCoin()
.then(() => console.log("You Won the toss"))
.catch(() => console.log("You loss the toss"))

// Promise Methods
/* 1. Promise.all()
   2. Promise.any()
   3. Promise.allSettled()
   4. Promise.race()
*/

console.log("Promise Methods....")
let reachJohn = new Promise((resolve, reject) => {
    let sts = true
    if(sts) {
        setTimeout(resolve, 3000, "John reached")
    }
    else {
        setTimeout(reject, 3000, "John not reached")
    }
})

let reachJacob = new Promise((resolve, reject) => {
    // let sts = true
    let sts = false // This Promise rejected. Then in the case of Promise.all() all are rejected.
    if(sts) {
        setTimeout(resolve, 2000, "Jacob reached")
    }
    else {
        setTimeout(reject, 2000, "Jacob not reached")
    }
})

let reachJerome = new Promise((resolve, reject) => {
    let sts = true
    if(sts) {
        setTimeout(resolve, 1000, "Jerome reached")
    }
    else {
        setTimeout(reject, 1000, "Jerome not reached")
    }
})

Promise.all([reachJohn, reachJacob, reachJerome]) // This all method checks all Promises are resolved. If all are resolved then returns result, If anyone Promise is rejected then ALL Promises are rejected.
.then((msg) => console.log("all resolved = " + msg))
.catch((msg) => console.log("all rejected = " + msg))

Promise.allSettled([reachJohn, reachJacob, reachJerome]) // This allSettled method checks all Promises are resolved. Eventhough anyone Promise is rejected then not ALL Promises are rejected. Instead it gives the resolved results and rejected results also. If anyone promise is pending then it waits for all are fullfilled[i.e, resolved, rejected].
.then((msg) => console.log("allSettled resolved = " + JSON.stringify(msg)))
.catch((msg) => console.log("allSettled rejected = " + JSON.stringify(msg)))

Promise.any([reachJohn, reachJacob, reachJerome]) // This any method waits if anyone Promise is fulfilled. Which promise is fulfilled first then return that result.
.then((msg) => console.log("any resolved = " + msg))
.catch((msg) => console.log("any rejected = " + msg))

Promise.race([reachJohn, reachJacob, reachJerome]) // This race method waits if anyone Promise is resolved. Which promise is settled(or resolved) first then return that result.
.then((msg) => console.log("race resolved = " + msg))
.catch((msg) => console.log("race rejected = " + msg))
