let str = 'pqgppmhsh'
let currIndex = 0
let maxLen = 0
let arr = []
let substring = ''
for(i=0; i<str.length; i++) {
    currIndex = arr.indexOf(str[i])
    if(currIndex != -1) {
        len = substring.length
        substring = arr.length > len ? arr.join('') : substring
        arr.splice(0, arr.length)
        arr.push(str[i])
    }
    else {
        arr.push(str[i])
        maxLen = Math.max(arr.length, maxLen)
    }
}
console.log(`substring is ${substring} and maxLen is ${maxLen}`)


