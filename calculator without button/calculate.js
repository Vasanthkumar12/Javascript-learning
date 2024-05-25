// console.log("expres = " + document.getElementById("ip").value)

// let buttn = document.createElement('button')
// buttn.id = 'btn'
// buttn.innerHTML = "Calculate"

let division = document.querySelector('div')
// division.appendChild(buttn)

// buttn.addEventListener('onchange', calculator)
let resDiv = document.createElement('h1')
resDiv.id = 'resdiv'
division.appendChild(resDiv)

let result = 0

function calculator() {
    let expression = document.getElementById("ip").value
    for(let i=0; i<expression.length; i++) {
        console.log("expression[i] = " + expression[i])
        if(expression[i] == ' ') {
            // console.log("Yes space = ' ' ")
            let arr = expression.split('')
            // console.log("arr = " + arr)
            arr.splice(i, 1)
            // console.log("arr = " + arr)
            expression = arr.join('')
            // console.log("expression = " + expression)
        }
    }
    
    let operand1 = 0
    let operator = expression[1]
    let operand2 = 0

    for(let i=0; i<expression.length; i++) {
        if(expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/') {
            operator = expression[i]
            // console.log("exxx = " + Number(expression.substring(0, i)))
            operand1 = Number(expression.substring(0, i))
            // console.log("exxx = " + Number(expression.substring(i+1, expression.length)))
            operand2 = Number(expression.substring(i+1, expression.length))
            break
        }
    }


    // console.log("expression = " + expression)

    // console.log("operator = " + operator)
    switch(operator) {
        case '+':
            result = operand1 + operand2
            break
    
        case '-':
            result = operand1 - operand2
            break

        case '*':
            result = operand1 * operand2
            break
        
        case '/':
            result = operand1 / operand2
            break
    }
    // console.log("result = " + result)
    document.getElementById('resdiv').innerHTML = result
}