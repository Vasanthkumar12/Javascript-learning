function calculate() {
    let months = Number(document.getElementById("months").value)
    let result = document.getElementById("result")
    let rate = 0
    if(months < 3){
        rate = 5.8
    }
    else if(months >= 3 && months <= 6 ) {
        rate = 6.5
    }

    else if(months >= 6 && months <= 9 ) {
        rate = 6.8
    }
    else {
        rate = 7
    }
    result.innerHTML = "Your interest rate is " + rate + "%"
}