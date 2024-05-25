let select = document.querySelector("#multiselect")
let btn = document.querySelector("button")
btn.id = "buttn"
btn.addEventListener('click', info)

function info() {
    let city = select.value
    console.log("city = " + city)
    switch(city){
        case 'Bengaluru':
            console.log("Bengaluru")
            population = 4326789
            literacyRate = 92.23
            language = 'Kannada'
            break
        case 'Chennai':
            console.log("Chennai")
            population = 3398789
            literacyRate = 95.23
            language = 'Tamil'
            break
        case 'Delhi':
            console.log("Delhi")
            population = 4437894
            literacyRate = 91.23
            language = 'Hindi'
            break
        case 'Pune':
            console.log("Pune")
            population = 2326789
            literacyRate = 75.23
            language = 'Urudhu'
            break
    }
    let text = `The indian city of ${city} has a population of ${population} and the literacyRate of ${literacyRate} and the language that people speaking is ${language}.`

    let result = document.createElement('h1')
    console.log(result)
    result.id = 'resultShow'
    let box = document.querySelector('#box')
    box.appendChild(result)
    document.getElementById('resultShow').innerHTML = text

}
