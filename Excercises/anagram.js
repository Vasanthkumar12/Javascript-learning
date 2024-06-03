// Anagram means all letters present inside one string are exactly present inside the another string not consider order
str1 = 'anagaum'
str2 = 'nagauam'

// prove these above strings are anagram
map = new Map()
map2 = new Map()
count = 0
if(str1.length == str2.length){
    for(i=0, j=0; i<str1.length; i++, j++) {
        // console.log(`Str[${i}] = ` + str1[i])
        if(map.has(str1[i])) {
            c = map.get(str1[i])    
            // console.log("Inside if = " + c)
            map.set(str1[i], ++c)
            // console.log(map)
        }
        else {
            // console.log("Inside else")
            map.set(str1[i], 1)
            // console.log(map)
        }

        if(map2.has(str2[i])) {
            c2 = map2.get(str2[i])    
            map2.set(str2[i], ++c2)
        }
        else {
            map2.set(str2[i], 1)
        }
    }

    console.log(map)
    console.log(map2)

    // Check the count of chars are equal in the 2 maps
    map.forEach((v1, k1) => {
        map2.forEach((v2, k2) => {
            if(v1 == v2 && k1 == k2) {
                count++
            }
        })
    })

    if(map.size == count) {
        console.log("Yes it is Anagram")
    }
    else {
        console.log("No it is not a Anagram")
    }
}
