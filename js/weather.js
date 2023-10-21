const API_KEY = '3fd42cfe97567e11d046bffa8133f415'

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:last-child')
            
            city.innerText = data.city.name
            weather.innerText = `${data.list[0].weather[0].main} / ${data.list[0].main.temp}`
        })
}

function onGeoError() {
    alert('Can\'t find you. No weather for you')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
