// 1. arr = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3]
// Remove Duplicates from the Array

let arr = [4, 6, 2, 3, 1, 1, 3, 5,18, 7, 8, 4, 3]

let dupRemovedArr = arr.reduce((accumulator, currVal) => {
    console.log(accumulator)
    if(!accumulator.seen[currVal]) {
        accumulator.result.push(currVal)
        accumulator.seen[currVal] = true
    }
    return accumulator
}, 
{
    seen: {},
    result: []
})
console.log(dupRemovedArr.seen)
console.log("Duplicate Removed Array = " + dupRemovedArr.result)

// 2. Name = "RObert Andrew George"
// Result: RAG
// Abbreviate by gathering first letter of each word
userName = "Robert Andrew George"
let arr1 = userName.split(" ")
console.log(arr1)
let arr2 = []
arr1.forEach(getFirstLetter)
function getFirstLetter(str) {
    console.log(str)
    arr2.push(str[0])
}
console.log(arr2.join(''))

// or using Map
userName = "Robert Andrew George"
arr1 = userName.split(" ")
arr2 = arr1.map(str => str[0])
console.log(arr2.join(''))

// 3. input = [6, -5, 7, -2, 4, 6, -1]
// Find the sum of positive numbers only
input = [6, -5, 7, -2, 4, 6, -1]
sumofpositivenums = input.filter(num => num > 0).reduce((tot, num) => tot + num)
console.log(sumofpositivenums)