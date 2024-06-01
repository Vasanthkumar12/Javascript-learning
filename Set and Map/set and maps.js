// Convert Array to Set
arr = [1, 2, 3, 4, 5, 2, 1, 4]
let set1 = new Set(arr) // Duplicates are not allowed in Set
console.log(set1)

// Convert Set to Array
let set2 = new Set()
set2.add(2)
set2.add(4)
set2.add(5)
set2.add(2)
set2.add("Jacob")
set2.add({'a': 1, 'b': 2})
obj = {'a': 1, 'b': 2} // duplicates not applicable for Primitive Types but 
// for objects it seems to be duplicates are allowed. here objs have different different memory addresses 
set2.add(obj)
console.log(set2)
console.log(set2.size)
console.log(set2.has(5))
console.log(set2.delete(2))
console.log(set2)
set2.forEach((val) => {
    console.log("Value = " + JSON.stringify(val))
})
arr2 = Array.from(set2)
console.log(arr2)

// Map object
map1 = new Map()
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 1)
map1.set(1, 1)
map1.set(5, 1)
map1.set(obj)
console.log(map1)
console.log(map1.size)
map1.forEach((v, k) => {
    console.log("k, v = ", k, v)
})
console.log()
console.log(map1)
console.log(map1)


