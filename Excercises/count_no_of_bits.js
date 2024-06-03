str = prompt("Please Enter 0's and 1's only : ")
count = 0
for(i=0; i<str.length; i++) {
    if(str[i] == '1'){
        count++
    }
}
console.log("str = " + str)
console.log("count = " + count)

// Another way -> using Bitwise &

count1 = 0
n = str
console.log("n = " + n)
for(i=0; i<str.length; i++) {
    count1 += n & 1
    // console.log("n & 1 count 1 - ", n & 1, count1)
    n = n.substr(0, n.length-1)
    // console.log("n = ", n)
}
console.log("count1 = " + count1)