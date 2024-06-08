try {
    let num = Number(prompt("Enter a number"))
    if(isNaN(num)) {
        throw "Please enter a Number"
    }
    else if(num == '') {
        throw "Please enter a Number"
    }
    else {
        console.log("You entered", num)
    }

}
catch(error) {
    console.log(error)
    }
finally {
    console.log("finally block It executes whether err is generated or not.")

}