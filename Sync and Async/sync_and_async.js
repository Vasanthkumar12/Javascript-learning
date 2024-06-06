console.log("step 1")
console.log("step 2")
console.log("step 3")

setTimeout(() => {
    console.log("step 5")
}, 0); // 4000 is a Minimum time

setTimeout(() => {
    console.log("step 1")
}, 4000); // 4000 is a Minimum time

setTimeout(() => {
    console.log("step 2") 
}, 2000);

setTimeout(() => {
    console.log("step 3") 
}, 1000);

console.log("bye")

for(i=0; i<10; i++) {
    console.log("i", i)
}

setInterval(() => {
    console.log("Hi..")
}, 1000);