function IsPalindrome() {
    let str = document.getElementById("string").value
    let result = document.getElementById("result")
    
    let strArray = str.split('')
    let len = strArray.length

    for(let i=0; i<len; i++) {
        if(strArray[i] == ' ') {
            strArray.splice(i, 1)
        }
    }

    let strSpaceRmved = strArray.join('').toLowerCase()
    let strrev = strArray.reverse().join('').toLowerCase()
    
    if(strSpaceRmved == strrev) {
        result.innerHTML = 'True'
    }
    else {
        result.innerHTML = "False"
    }
}