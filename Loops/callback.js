let name1 = 'Jesus'
function greetName(name) {
    console.log("Hi " + name)
}

function greetHeading(name) {
    console.log("Hello " + name)
}

function greet(callback) {
    console.log(callback)
    callback(name1)
}

greet(greetName)
// greet(greetHeading)
greet(name => {
    console.log("Hello " + name)
})

// forEach Loop
arr = [1, 2, 3, 4, 5]
arr.forEach(printValue)
function printValue(val) {
    console.log("value = " + val % 2)
}

arr = ['CSE', 'EEE', 'ECE', 'CIVIL']
arr.forEach(value) 

function value(ele) {
    let dropDown = document.getElementById('dept')
    let opt = document.createElement('option')
    opt.value = ele
    opt.textContent = ele
    dropDown.appendChild(opt)
}

// Excercise -> Sum of positive numbers
nums = [1, 2, 3, 4, -5, 8, -9]
let tot = 0
nums.forEach(sumOfpositiveNums)
function sumOfpositiveNums(num) {
    if(num > 0) {
        tot += num
    }
}
console.log("sum of positive nums = " + tot)