/* There are two types of Data Types
    1. Primitive DT
        1) string
        2) number
        3) bigint
        4) boolean
        5) undefined
        6) symbol
        7) null
    
    2. Reference Types
        1) arrays
        2) functions
        3) all objects    


Memory Allocation for those 2 objects
    1. Stack memory
        All primitive type datas are stored inside the Stack Memory

    2. Heap memory
        All reference type datas are stored inside the Heap Memory
*/

// Examples for Primitive DT
let a = 10
let b = a
a = 30
b = 40
console.log("a, b = ", a, b) // o/p a=30, b=40

// Examples for Reference DT
arr1 = [1, 2, 3]
arr2 = arr1
arr1[0] = 8
arr2[0] = 9
console.log("arr1, arr2 = ", arr1, arr2) // o/p arr1 = [9, 2, 3], arr2 = [9, 2, 3] 

obj1 = {
    name: "Joseph",
    age: 22
}
obj2 = obj1

obj2.name = "Jesus"
console.log("obj1, obj2 = ", obj1, obj2) // o/p obj1 = {name: 'Jesus', age: 22}, obj2 = {name: 'Jesus', age: 22}
