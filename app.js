/* 3.0 The Document Object */
document.title = 'Sky App'


/* 3.1 HTML in Javascript */
const titleElement = document.getElementById('title')
// titleElement.innerText = 'Got you!'
console.log(1, titleElement, titleElement.id, titleElement.className)


/* 3.2 Searching for Elements */
const hellos = document.getElementsByClassName('hello')
console.log(hellos)

const titleElement2 = document.getElementsByTagName('h1')
console.log(2, titleElement2)

const titleElement3 = document.querySelector('.hello h1')
console.log(3, titleElement3)

const titleElement4 = document.querySelectorAll('.hello h1')
console.log(4, titleElement4)

const titleElement5 = document.querySelectorAll('.hello h1:first-child')
console.log(5, titleElement5)

const titleElement6 = document.querySelector('#title')
console.log(6, titleElement6)

const titleElement7 = document.querySelectorAll('#title')
console.log(7, titleElement7)

const titleElement8 = document.querySelectorAll('#title:first-child')
console.log(8, titleElement8)


/* 3.3 ~ 3.4 Events */
// titleElement.style.color = 'blue'

// function handleMouseClick() {
//     console.log('title was clicked!')
// }
// function handleMouseEnter() {
//     titleElement.innerText = 'Mouse is here!'
// }
// function handleMouseLeave() {
//     titleElement.innerText = 'Mouse is gone!'
// }

// titleElement.addEventListener('click', handleMouseClick)
// titleElement.addEventListener('mouseenter', handleMouseEnter)
// titleElement.addEventListener('mouseleave', handleMouseLeave)
/* aaa.removeEventListener(bbb) */
// titleElement.onclick = handleMouseClick
// titleElement.onmouseenter = handleMouseEnter
// titleElement.onclick = handleMouseLeave

// function handleWindowResize() {
//     document.body.style.backgroundColor = 'tomato'
// }
// function handleWindowCopy() {
//     alert('copier!')
// }
// function handleWindowOffline() {
//     alert('NO WIFI')
// }
// function handleWindowOnline() {
//     alert('YES WIFI')
// }

// window.addEventListener('resize', handleWindowResize)
// window.addEventListener('copy', handleWindowCopy)
// window.addEventListener('offline', handleWindowOffline)
// window.addEventListener('online', handleWindowOnline)


/* 3.6 ~ 3.8 CSS in JavaScript */
const h1 = document.querySelector("div.hello:first-child h1")
function handleMouseClick() {
    // const currentColor = h1.style.color
    // let newColor
    // if (currentColor === 'blue') {
    //     newColor = 'tomato'
    // } else {
    //     newColor = 'blue'
    // }
    // h1.style.color = newColor

    const clickedClassName = 'active'
    // if (h1.classList.contains(clickedClassName)) {
    //     h1.classList.remove(clickedClassName)
    // } else {
    //     h1.classList.add(clickedClassName)
    // }

    h1.classList.toggle(clickedClassName)
}

titleElement.addEventListener('click', handleMouseClick)

