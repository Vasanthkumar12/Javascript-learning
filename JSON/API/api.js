// API -> An API, or application programming interface, is a set of rules or protocols that enables software applications to communicate with each other to exchange data, features and functionality.
// fetch() -> fetch method used to do get/post/update/delete operations form on program to another. and it returns a PROMISE. 

// APIs without using KEY:
// --------------------------------
// JOKE API:
fetch('https://geek-jokes.sameerkumar.website/api?format=json')
.then((res) => {
    if(res.ok)
        console.log("Success")
    else
        console.log("Failed")
    return res.json()
}) // parse the above Promise
.then((res) => console.log("Joke = ", res.joke))
.catch((err) => console.log(err))

// Message API:
// console.log(fetch('https://whatthecommit.com/index.txt'))

// JSON Placeholder website for free fake APIs - GET data:
fetch('https://jsonplaceholder.typicode.com/todos/200')
    .then(response => response.json())
    .then(json => console.log("Json = ", json))

// POST data to the APIs:
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body:JSON.stringify({
        userId: 10,
        id: 201,
        title: 'Jesus rescue Samuel Sabari',
        completed: false
    })
})
.then(res => {
    if(res.ok) console.log("Succes POST")
    else console.log("Failed Post")    
})

// PUT data to the APIs:
fetch('https://jsonplaceholder.typicode.com/todos/200', {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body:JSON.stringify({
        userId: 10,
        id: 200,
        title: 'Jesus rescue Samuel Sabari',
        completed: false
    })
})
.then(res => {
    if(res.ok) console.log("Succes PUT")
    else console.log("Failed PUT")    
})
.catch(err =>{ 
    console.log(err)
})

fetch('https://jsonplaceholder.typicode.com/todos/200', {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
    body:JSON.stringify({
        userId: 10,
        id: 200,
        title: 'Jesus rescue Samuel Sabari',
        completed: false
    })
})
.then(res => {
    if(res.ok) console.log("Succes DELETE")
    else console.log("Failed DELETE")    
})
.catch(err =>{ 
    console.log(err)
})