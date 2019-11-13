// console.log("Hello")
// window.console.log("Hello with window")

var one = 1

two = 2

const three = 3


// console.log(window.one)
// console.log(window.two)
// console.log(window.three)

// function defineIntegers() {
//     var four = 4
//     console.log("logging four in a function", four)
//     console.log("logging four in a function with window", window.four)

//     five = 5
//     console.log("logging 5 in a function", five)
//     console.log("logging 5 in a function with window", window.five)
// }

// defineIntegers()

window.document

//Returns the first element that has the ID attribute with the specified value
document.getElementById('header')
//Returns a HTMLCollection containing all elements with the specified class name
document.getElementsByClassName('unordered-list')
//Returns a HTMLCollection containing all elements with the specified tag name
document.getElementsByTagName('li')

//More flexible option is to use document.querySelector()

document.querySelector('#header') 
document.querySelector('.unordered-list')
document.querySelector('li')

const firstListItem = document.getElementsByTagName('li')[0]
// firstListItem.style.color = "red"
// firstListItem.innerText = "First item"
// firstListItem.innerHTML = "<a href='https://www.google.com'>Go to Google<a/>"

//element.innerText returns a string representation of all of the child nodes context
const body = document.querySelector('body')

// body.innerText
// --> 
// `This is the main header
// This is the second header
// 1
// 2
// 3`

//element.innerHTML returns a HTML representation of the child nodes.
body.innerHTML
// `
// <header id="header">This is the main header</header>
//     <header id="header">This is the second header</header>
//     <ul class="unordered-list">
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// `

//Parent and Children
const numbersList = document.querySelector('ul')
numbersList.parentElement
numbersList.children
numbersList.firstElementChild



//Creating new elements

const li = document.createElement('li')
li.innerText = 4

//Adding and removing nodes

// numbersList.append(li)
// numbersList.prepend(li)
// numbersList.removeChild(li)

 const todos = ["Call insurance", "Buy laundry liquid", "Call mum", "Book dentist"]

// const todoList = document.createElement('ol')

// todos.forEach(todo => {
//     const todoItem = document.createElement('li')
//     todoItem.innerText = todo
//     todoList.append(todoItem)
// })

// document.querySelector('body').append(todoList)


// function createTodoList(todos) {
//     const todoList = document.createElement('ol')

//     todos.forEach(todo => {
//         const todoItem = document.createElement('li')
//         todoItem.innerText = todo
//         todoList.append(todoItem)
//     })

//     document.querySelector('body').append(todoList)
// }

// createTodoList([5,6,7,8,9])

// document.querySelector('body').addEventListener('click', () => {
//     alert("I have been clicked")
// })

// window.addEventListener('resize', (event) => {
//     console.log(event)
//     document.querySelectorAll('#header')[0].innerText = innerWidth
// })

// window.addEventListener("keyup", (event) => {
//    document.querySelectorAll('#header')[1].innerText = event.key
// })


// document.querySelector('#button1').addEventListener('click', (e) => {
//     console.log("Button 1 was clicked")
// })

// document.querySelector('#box1').addEventListener('click', (e) => {
//     console.log("Button 1 container was clicked")
// })

// document.querySelector('#grid-container').addEventListener('click', (e) => {
//     console.log(e)
//     console.log("Grid container was clicked")
// })

// document.querySelector('body').addEventListener('click', (e) => {
//     console.log("Body was clicked")
// }) 


// function createTodoList(todos) {
//     const todoList = document.createElement('ol')
//     todos.forEach(todo => {
//         todoList.append(createTodoElement(todo))
//     })
//     document.querySelector('body').append(todoList)
// }

// function createTodoElement(todo) {
//     const todoItem = document.createElement('li')
//     todoItem.innerText = todo
//     todoItem.style.color = 'red'
//     todoItem.addEventListener('click', toggleDone)
//     return todoItem
// }

// function toggleDone(e) {
//     e.target.style.color === 'red' ?  e.target.style.color = 'green' : e.target.style.color = 'red'
// }

// createTodoList(todos)

//Adding todos from user input.
// const input = document.createElement('input')
// input.placeholder = "Add todo"

// const addTodo = document.createElement('button')
// addTodo.innerText = "Add"

// addTodo.addEventListener('click', () => {
//     document.querySelector('ol').append(createTodoElement(input.value))
// })

// document.querySelector('body').append(input, addTodo)







