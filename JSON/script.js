// JSON
let user = {
    "name" : "vasanth",
    "age" : 234,
    "email" : "vasanth23402@gmail.com"
}

let users = [
    {
        "name" : "Ramu",
        "age" : 23,
        "email" : "ramu123@gmail.com"
    },
    {
        "name" : "Ragu",
        "age" : 34,
        "email" : "ragu123@gmail.com"
    }
]

let usersArray = `[
    {
        "name" : "Ramu",
        "age" : 23,
        "email" : "ramu123@gmail.com"
    },
    {
        "name" : "Ragu",
        "age" : 34,
        "email" : "ragu123@gmail.com"
    }
]`

console.log("user = ", user)
console.log("users = ", users)
console.log("usersArray = ", usersArray)
parsed = JSON.parse(usersArray) // Convert String into JSON. Usually APIs send data in the format of String.
console.log("usersArray = ", parsed)
console.log("usersArray = ", parsed)
console.log("usersArray = ", parsed[0].name)
string = JSON.stringify(parsed) // Convert JSON into String.
console.log("string = ", string)
