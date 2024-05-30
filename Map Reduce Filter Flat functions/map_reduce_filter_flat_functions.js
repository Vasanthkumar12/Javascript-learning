// 1. Map function -> Same as forEach but in forEach the result arr is not created but in map func res arr is created.
let saudiAmt = [1, 2, 3, 4, 5]
let indianAmt = saudiAmt.map(ele => ele * 20)
console.log("Indian Amount = " + indianAmt)

// In another way Map function using callback
saudiAmt = [1, 2, 3, 4, 5]
indianAmt = saudiAmt.map(convert)

function convert(ele) {
    return ele * 20
}
console.log("Calculate Indian Amount = " + indianAmt)

// Map used in object
let users = [
    {name: "Ravi", age: 30},
    {name: "Prabha", age: 28},
    {name: "Gandhi", age: 56},
    {name: "Kavitha", age: 34},
    {name: "Murugesan", age: 45}
]
let ages = users.map(entry => entry.age)
console.log("ages = " + ages)

// 2. Reduce Function -> Executes reducer callback and returns accumulated result
let cost = [200, 400, 350, 100]
let totCost = cost.reduce((accumulate, ele) => accumulate + ele)
console.log("Total Cost = " + totCost)

// print result as { a:1, b:1, c:2, d:2, f:2, g:1 }
array2D = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g']
]
console.log("flat() function = " + array2D.flat())
let count = array2D.flat().reduce(
    (accumulator, ele) => {
        if(accumulator[ele])
            accumulator[ele]++
        else
            accumulator[ele] = 1
        return accumulator
    },
    {})
console.log("Count no.of elements = " + JSON.stringify(count, null, 1))

// 3. Filter Function
let nums = [29, 84, 43, 90, 86, 75]
let result = nums.filter(ele => ele > 50)
console.log("result = " + result)

