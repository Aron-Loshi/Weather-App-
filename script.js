document.addEventListener("DOMContentLoaded", () => {
    let apiKey = 'b7255e31930aa8189917527590df74a6';
    
    let searcher = document.getElementById('searcher');

    document.getElementById('submiti').addEventListener('click', () => {
        let city = searcher.value.trim();

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let weatherInfo = document.querySelector('#weather-info');
            let temperatura = data.main.temp;
            let description = data.weather[0].description;
            let icon = data.weather[0].icon;

            weatherInfo.innerHTML = `
            <h2>${city}</h2>
            <img src="http://openweathermap.org/img/wn/${icon}.png">
            <p>${description}</p>
            <p>Temperatura eshte: ${temperatura} °C</p>
            `
        })
    }) 
})