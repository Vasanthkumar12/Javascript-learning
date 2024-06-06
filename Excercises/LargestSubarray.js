let a = [3, -9, 1, -3, 5, -1, 9]
cursum = 0
maxsum = 0
arr = []
for(i=0; i<a.length; i++) {
    cursum = Math.max(a[i], cursum + a[i])
    maxsum = Math.max(cursum, maxsum)
}
console.log("Maxsum = " + maxsum)