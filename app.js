const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector('input')
// const loginButton = document.querySelector('#login-form button')

const link = document.querySelector('a')

// function onLoginBtnClick() {
//     const username = loginInput.value
//     if (!username) {
//         alert('Please write your name.')
//     } else if (username.length > 15) {
//         alert('Your name is too long.')
//     } else {
//         console.log('hello', username)
//     }
// }

// loginButton.addEventListener('click', onLoginBtnClick)

function onLoginSubmit(event) {
    // console.log('hello', loginInput.value)
    event.preventDefault()
    console.dir(event)
}

function onLinkClick(event) {
    event.preventDefault()
    console.dir(event)
    // alert('clicked!')
}

loginForm.addEventListener('submit', onLoginSubmit)

link.addEventListener('click', onLinkClick)