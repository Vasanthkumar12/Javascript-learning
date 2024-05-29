// 1. for loop
for(let i=0; i<10; i++) {
    console.log("i = " + i)
}

// for..of  -> for..of is used to fetch the elements from an "Array" one by one
let arr = [1, 2, 3, 4, 5]
for(let ele of arr) {
    console.log("ele = " + ele)
}

// for..in  -> for..in is used to fetch the elements from an "Object" one by one
let object = {
    name: 'Bike',
    noOfWheel: 4,
    noOfSteering: 1
}
for(let ele in object) {
    console.log("ele = " + ele)
    console.log("value = " + object[ele])
}
console.clear
// 2. While Loop
while(true) {
    let num = Number(prompt('Enter any number '))
    console.log(num)
    console.log("!Is NaN = " + isNaN(num))
    
    if(!isNaN(num)) {
        break
    } 
}

// 3. do...while loop
let i=0
do{
    console.log("I am from do loop " + i)
    i++
}while(i<10)