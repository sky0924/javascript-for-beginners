const todoForm = document.querySelector('#todo-form')
const todoInput = todoForm.querySelector('input')
const todoList = document.querySelector('#todo-list')

const TODOS_KEY = 'todos'

let todos = []

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(event) {
    const li = event.target.parentElement
    li.remove()

    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTodos()
}

function paintTodo(newTodoObj) {
    const { id, text } = newTodoObj

    const li = document.createElement('li')
    li.id = id
    
    const span = document.createElement('span')
    span.innerText = text
    
    const btn = document.createElement('button')
    btn.innerText = '❌'
    btn.addEventListener('click', deleteTodo)

    li.appendChild(span)
    li.appendChild(btn)
    todoList.appendChild(li)
}

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ''
    const newTodoObj = { id: Date.now(), text: newTodo }
    todos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

todoForm.addEventListener('submit', handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (!!savedTodos) {
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos
    parsedTodos.forEach(paintTodo)
}
