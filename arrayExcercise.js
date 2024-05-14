let array = [5, 8, 10, 7, 9, 11]

// Replace 7, 9, 11 with 17, 19, 111
console.log("Replace 7, 9, 11 with 17, 19, 111")
array.splice(3, 3, 17, 19, 111)
console.log(array)

// Insert 100 in the beginning
console.log("Insert 100 in the beginning")
array.unshift(100)
// array.splice(0, 0, 100)
console.log(array)

// Removes the first element of the array
console.log("Removes the first element of the array")
array.shift()
console.log(array)

// Insert 200 in last but one position
console.log("Insert 200 in last but one position")
array.push(200)
console.log(array)

// Add 1000 at the end
console.log("Add 1000 at the end.")
array.push(1000)
// array.splice(array.length, 0, 1000)
console.log(array)

// Insert 0 in the middle.
console.log("Insert 0 in the middle.")
array.splice(Math.floor(array.length/2), 0, 0)
console.log(array)