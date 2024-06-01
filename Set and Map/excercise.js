// Qn. arr = [1, 2, 3, 4, 7, 6, 8], target = 13 -> In this arr addition of which nums to give the target. 

// 1. Solve using "Brute Force" Method -> It means try all the combinations

// n = prompt("Enter size of an array : ")
// arr = []
// resArr = []
// for(i=0; i<n; i++){
//     arr[i] = Number(prompt("Enter Numbers one by one : "))
// }
// target = Number(prompt("Enter target element : "))
// console.log("arr = " + arr)

// for(i=0; i<n; i++) {
//     for(j=i+1; j<n; j++) {
//         if(arr[i] + arr[j] == target)
//             resArr = [i, j]
//     }
// }

// console.log("resArr = " + resArr)

// the time complexity of the Brute Force Method is O(n^2)

// 2. Solve using Map object

arr = [1, 2, 3, 4, 7, 6, 8]
target = Number(prompt("Enter the Target : "))
resArr = []
map = new Map()

for(i=0; i<arr.length; i++) {
    complement = target - arr[i]
    if(map.has(complement)) {
        resArr = [map.get(complement), i]
    }
    map.set(arr[i], i)
}
console.log("resArr = [" + resArr + "]")
