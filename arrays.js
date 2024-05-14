let numbersArray = [1, 2, 3, 4, 5]
let namesArray = ["ragu", "ravi", "ramu", "samu"]

console.log(namesArray)
console.log(namesArray[1])
console.log(namesArray[7]) // o/p => undefind
console.log(namesArray.length)
console.log(namesArray[1].length)

let mutiTypes = [3, 5, 6, 'asd', "dfs", [3, 8, 9]]
console.log(mutiTypes)
console.log(mutiTypes[4])
console.log(mutiTypes[5])
console.log(mutiTypes[5][0])

// Array Functions
console.log("Array Functions in js")

// push => arrayName.push(e1, e2, e3......)
console.log(numbersArray.push(6)) // o/p => insert element always in the last
console.log(numbersArray.push(8, 7)) // o/p => insert elements always in the last
console.log(numbersArray)

// pop => arrayName.pop()
console.log(numbersArray.pop()) // o/p => removes always the last element
console.log(numbersArray)

// // delete => delete arrayName[index]
// delete numbersArray[5] // deteleted that element and let that space empty 
// console.log(numbersArray)
// console.log(numbersArray[2]) // o/p => undefined

console.log("Splice Method")
// splice => arrayName.splice(start_index, no.of.elementsToDeleteFromStrt_indx) It performs these actions at the same time -> remove, insert 
console.log(numbersArray.splice(5, 1))
console.log(numbersArray)

// splice => arrayName.splice(start_index, no.of.elemtsToDelFrmStrt_indx, insert_ele1, ele2,....) It performs these actions at the same time -> remove, insert 
console.log(numbersArray.splice(5, 1, 19))
console.log(numbersArray.splice(5, 1, "ashd"))
console.log(numbersArray)

console.log("Slice Method")
// slice => arrayName.splice(start_index, end_index) -> (strt_indx < end_indx)
console.log(numbersArray.slice(1, 3))
console.log(numbersArray.slice(3, -1))
console.log(numbersArray)

console.log("Join Method")
// join() => It coverts the array into string
let arr1 = [1, 2, 3, 4, 5]
console.log(arr1.join(""))

let arr2 = ["Vasanth ", "Kumar ", "Living in ", "chennai"]
console.log(arr2.join(""))

console.log("Split Method")
// split() => It coverts the string into array
let arr3 = "12345"
console.log(arr3.split(""))

let arr4 = "Vasanth Kumar Living in chennai"
console.log(arr4.split(" "))

console.log("Concat Method")
// concat() => It also joins 2 arrays into 1 array
let arr5 =  [1, 2, 3, 4, 5]
let arr6 = ["Vasanth ", "Kumar ", "Living in ", "chennai"]
console.log(arr5 + arr6)
console.log(arr5.concat(arr6))

console.log("Spread Method")
// spread() => It also joins 2 arrays into 1
let arr7 =  [1, 2, 3, 4, 5]
let arr8 = ["Vasanth ", "Kumar ", "Living in ", "chennai"]
console.log(...arr5, ...arr6)
