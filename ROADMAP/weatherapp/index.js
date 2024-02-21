function getWeather() {
        var apiKey = 'b1dceca300e7a67e3c4229787c56e63c';
        var city = document.getElementById('city').value;
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Process the weather data and update the UI
                var temperature = data.main.temp;
                var description = data.weather[0].description;
                var humidity = data.main.humidity;
                var icon = data.weather[0].icon;

                document.getElementById('temperature').textContent = temperature + '°F';
                document.getElementById('description').textContent = description;
                document.getElementById('humidity').textContent = humidity + '%';
                document.getElementById('icon').src = 'https://openweathermap.org/img/w/' + icon + '.png';

                // Add weather class to container based on description
                var container = document.querySelector('.container');
                container.classList.remove('weather-sunny', 'weather-cloudy', 'weather-rainy', 'weather-snowy', 'weather-unknown');

                if (description.includes('cloud')) {
                    container.classList.add('weather-cloudy');
                } else if (description.includes('rain')) {
                    container.classList.add('weather-rainy');
                } else if (description.includes('snow')) {
                    container.classList.add('weather-snowy');
                } else if (description.includes('sun')) {
                    container.classList.add('weather-sunny');
                } else {
                    container.classList.add('weather-unknown');
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    function getWeatherEmoji(description) {
        var emoji = '';

        if (description.includes('cloud')) {
            emoji = '☁️';
        } else if (description.includes('rain')) {
            emoji = '🌧️';
        } else if (description.includes('snow')) {
            emoji = '❄️';
        } else if (description.includes('sun')) {
            emoji = '☀️';
        } else {
            emoji = '❓';
        }

        return emoji;
    }
