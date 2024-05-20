function bill_calculator() {
    let input_unit = Number(document.querySelector("#InputUnit").value);
    let amount = document.querySelector("#result");

    let first50units = 0;
    let next100units = 0;
    let upto250units = 0;
    let above250units = 0;

    if(input_unit <= 50){
        first50units = input_unit * 0.75
        console.log("50 units = " + first50units)
    }
    else if(input_unit > 50 && input_unit <= 150){
        first50units = 50 * 0.75
        console.log("50 units = " + first50units)
        next100units = (input_unit - 50) * 1
        console.log("100 units = " + next100units)
    }
    else if(input_unit > 150 && input_unit <= 250){
        first50units = 50 * 0.75
        console.log("50 units = " + first50units)
        next100units = 100 * 1
        console.log("100 units = " + next100units)
        upto250units = (input_unit - 150) * 1.30
        console.log("upto 250 units = " + upto250units)
    }
    else{
        first50units = 50 * 0.75
        next100units = 100 * 1
        upto250units = 100 * 1.30
        above250units = (input_unit - 250) * 1.50
        console.log("above 250 units = " + above250units)
    }

    amount = first50units + next100units + upto250units + above250units
    console.log("result = " + amount)
    result.innerHTML = amount
}