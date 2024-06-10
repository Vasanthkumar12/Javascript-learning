let selectArr = document.querySelectorAll('select')
// console.log(selectArr)
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let btn = document.getElementById('btn')
let errorsDiv = document.getElementById('errors')

fetch('https://api.frankfurter.app/currencies')
.then(curr => curr.json())
.then(cur => displayCurrencies(cur))

function displayCurrencies(cur) {
    let curArr = Object.entries(cur)
    for(let i=0; i<curArr.length; i++){
        // console.log(curArr[i][0])
        let opt = `<option value="${curArr[i][0]}">${curArr[i][0]}</option>`
        selectArr[0].innerHTML += opt
        selectArr[1].innerHTML += opt
    }
}

btn.addEventListener('click', () => {
    let input1Val = input1.value
    let input2Val = input2.value
    let curr1 = selectArr[0].value
    let curr2 = selectArr[1].value
    let currOne = 0
    let currTwo = 0
    let amount1 = 0 
    let errors = []
    let checkAmount = true
    let displayResIn = 1

    if(curr1 == curr2) {
        errors.push(`Please Choose different currency values`)
        checkAmount = false
    }

    if(checkAmount == true && input1Val == '' && input2Val == '') {
        errors.push(`Please Enter either ${curr1} currency amount or ${curr2} currency amount !`)
    }
    
    errorsDiv.innerHTML = ''
    if(errors.length != 0) {
        for(let i=0; i<errors.length; i++) {
            let err = `<h2>${errors[i]}</h2>`
            errorsDiv.innerHTML += err
        }
        return
    }

    if(input1Val != '') {
        amount1 = input1Val
        currOne = curr1
        currTwo = curr2
        displayResIn = 2
    }
    else {
        amount1 = input2Val
        currOne = curr2
        currTwo = curr1
    }
    
    // console.log("curr1 = ", currOne)
    // console.log("curr2 = ", currTwo)
    
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amount1}&from=${currOne}&to=${currTwo}`)
      .then(resp => resp.json())
      .then((data) => {
        res = Object.values(data.rates)[0]
        // console.log(res)
        // console.log(result)
        if(displayResIn == 1)
            input1.value = res
        else
            input2.value = res
      });
})

