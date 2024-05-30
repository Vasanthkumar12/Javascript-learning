// Closure gives you the access to the outer function's scope from the inner function
function outer() {
    let name = "Vasanth Joseph"
    function inner() {
        console.log(name)
        console.log("Hello ", name)
    }
    return inner
}
let inn = outer()
inn()

// another example
function outer1(x) {
    return function inner2(y){
        return x+y
    }
}
let add5 = outer1(5)
console.log(add5(10))

let add20 = outer1(20)
console.log(add20(50))
