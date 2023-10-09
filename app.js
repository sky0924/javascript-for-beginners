/* 2.1 ~ 2.3 const, let, number, string, operate */
let a = 5
const b = '2'

console.log(a + b)
console.log(a * b)
console.log(a / b)


/* 2.4 boolean, null, undefined */
const amIFat = null
let something
console.log(amIFat, something)


/* 2.5 Array */
const daysOfWeek = ['wed', 'thu', 'fri', 'sat']

// Get Item from Array
console.log(daysOfWeek[2])

// Add one more day to the array
daysOfWeek.push("sun")
console.log(daysOfWeek)

const toBuy = ['potato', 'tomato', 'carrot']
console.log(toBuy)

toBuy.push('cabbage')
console.log(toBuy)
console.log(toBuy[999])


/* 2.6 Object */
const playerName = 'sky'
const playerPoints = 0
const playerIsAwesome = false
const playerIsFat = 'little bit'

const player = {
    name: 'sky',
    points: 0,
    isAwesome: true,
    isFat: 'little bit',
}
console.log(player)
console.log(player.name)

player.points += 1
console.log(player)


/* 2.7 ~ 2.8 Function */
function sayHello(name, age) {
    console.log('Hello! My name is ' + name + '. and I\'m ' + age + ' years old.')
}
sayHello('sky', 21)
sayHello('nico', 99)

function plus(a, b) {
    console.log(a + b)
}
plus(1, 2)

function divide(a, b) {
    console.log( a / b)
}
divide(1, 2)

const player2 = {
    name: 'sky',
    sayHello: function(name) {
        console.log('Hello ' + name + ', nice to meet you!')
    }
}
player2.sayHello('nico')
player2.sayHello('lynn')


/* 2.11 Returns */
function plus(a, b) {
    return a + b
}
const result = plus(100, 200)
console.log(result)


/* 2.13 Conditionals */
const age = parseInt(prompt('How old are you?'))
console.log(typeof age)
console.log(isNaN(age))

if (isNaN(age) || age < 0) {
    console.log('Please write a real positive number.')
} else if (age < 18) {
    console.log('You are too young.')
} else if (age >= 18 && age < 60) {
    console.log('You can drink!')
} else if (age >= 60 && age < 80) {
    console.log('You should exercise.')
} else if (age >= 100) {
    console.log('Wow! you are wise.')
} else if (age >= 80) {
    console.log('You can do whatever you want.')
}