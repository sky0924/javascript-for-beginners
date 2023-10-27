const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img')

bgImage.id = 'main-bg'
bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)