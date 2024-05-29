// 1. Function with no args
function helloWorld() {
    console.log("Hello World")
}
helloWorld()

// 2. Function with args
function sayHello(name) { // In this "name" is called "parameter"
    console.log('Hello ' + name)
}
sayHello("Jesus") // In this "Jesus" is called "argument"

function addition(a, b) {
    return a + b
}
console.log(addition(4, 5))

function isPositive(num) {
    return num > 0
}
console.log(isPositive(-4))

// 3. what is stored in the function variable. i.e, function name is act as a variable.
console.log(isPositive) // If we the func name then It prints the function definition

// 4. typeof
console.log(typeof isPositive) // O/P => function

/* 5. Hoisting - It means that we can call the method before its declaration. The javascript Interpreter takes care
the arrangement of this. In javascript there is no order for method calling. you can call from anywhere */
console.log("4*5 = " + product(4,5))
function product(a, b) {
    return a * b
}

// 6. Default Parameters
console.log(greet("Yegova")) // O/P -> Welcome Yegova
console.log(greet()) // O/P -> Undefined
function greet(name) {
    return "Welcome " + name
}

// console.log(greet("Yegova")) // It overrides the default parameter value i.e, "Jesus"
// console.log(greet()) // It uses the default parameter value i.e, "Jesus"
// function greet(name="Jesus") {
//     return "Welcome " + name
// }

// 7. Recursion -> A function calls itself again and again
function factorial(n) {
    if(n==1)
        return 1
    return n * factorial(n-1)
}
console.log("Factorial of 5 = " + factorial(5))
console.clear()

// Excercise : Print 1 to 100 without using any loops - ans is using Recursion
function printNumbers(n) {
    if(n == 100) {
        console.log(n)
        return
    }
    else if(n < 100) {
        console.log(n)
    }
    n++
    printNumbers(n)  
}
let n=1
printNumbers(n)

// 8. Function Expression
let squareOfaNumber = function(n) {
    return n * n
}
console.log("Square Of 2 = " + squareOfaNumber(2))

let sum = 0
let addArrayofNumbers = function(arr) {
    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
let array = [1, 2, 4, 7, 9]
console.log("Sum of nums = " + addArrayofNumbers(array))

// Area of a Circle
let areaOfCircle = function(r) {
    return 3.14 * r * r
}
console.log("Area Of Circle with radius of 5 is " + areaOfCircle(5))

// Volume of Cone
let volume = function(l, b, h) {
    return l * b * h
}
console.log("Volume Of Cone with l=3 b=4 h=5 is " + volume(3, 4, 5))

console.clear
// 9. Arrow Function
    // Area of a Circle
let areaCirc = (r) => { return 3.14 * r * r }
console.log("Area Of Circle with radius of 5 is " + areaCirc(5))

let areaCircle = (r) => Math.PI * r * r // or let areaCircle = r => Math.PI * r * r  -> paranthesis removed for the argument
console.log("Area Of Circle with radius of 5 is " + areaCircle(5))

    // Volume of Cone
let volumeOfCone = (l, b, h) => l * b * h
console.log("Volume Of Cone with l=3 b=4 h=5 is " + volumeOfCone(3, 4, 5))

// 10. Var arg method
console.clear
let sum1 = 0
let sumOfArray = function(...args) {
    console.log("Arguments are = " + args)
    for(let ele of args) {
        sum1 += ele
    }
    return sum1
}
console.log("Sum of these multiple elements = " + sumOfArray(1, 2, 4, 7, 9))

console.clear
let sum2 = 0 
let sumOfArray1 = function() {
    console.log("Arguments are = " + arguments)
    for(let ele of arguments) {
        sum2 += ele
    }
    return sum2
}
console.log("Sum of these multiple elements = " + sumOfArray1(1, 2, 4, 7, 9))

// 11. Generators -> generates value one by one
function* indxGenerator() {
    let index = 1
    while(true) {
        yield index++
    }
}
const gen = indxGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
