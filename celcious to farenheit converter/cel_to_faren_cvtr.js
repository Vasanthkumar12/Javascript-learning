function convert() {
    console.log("Function Start....")
    let celcious = Number(document.getElementById("celcious").value)
    console.log("celcious = " + celcious)
    let farenheit = (celcious * 9/5) + 32
    console.log("farenheit " + farenheit)
    let result = document.getElementById("result")
    result.innerHTML = farenheit.toFixed(2)
    console.log("result.innerHTML = " +  result.innerHTML)
    console.log("Function End....")
}