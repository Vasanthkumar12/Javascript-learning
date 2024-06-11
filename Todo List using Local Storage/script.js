let input = document.querySelector('input')
let btn = document.querySelector('button')
let todo_div = document.getElementById('todo-list')
let todos = []

window.onload = () => {
    // console.log("Local Storage")
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => {
        addTodo(todo)
    })
}

btn.addEventListener('click', () => {
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos)) // Store values in local storage in terms of key value pair 
    // console.log(todos)
    addTodo(input.value)
    input.value = ''
})

function addTodo(todo) {
    let todo_ele = document.createElement('h2')
    todo_ele.innerText = todo
    todo_div.appendChild(todo_ele)
    
    todo_ele.addEventListener('click', () => {
        todo_ele.style.textDecoration = 'line-through'
        remove(todo)
    })
    todo_ele.addEventListener('dblclick', () => {
        todo_div.removeChild(todo_ele)
        remove(todo)
    })
}

function remove(todo) {
    let index = todos.indexOf(todo)
    if(index > -1) {
        todos.splice(index, 1)
    }
    // localStorage.clear() // It clears all the values in the Todos array even one value we clear.
    localStorage.setItem('todos', JSON.stringify(todos))
    // console.log(todos)
}