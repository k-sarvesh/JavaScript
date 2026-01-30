const apiKey = "c6613b30a05dbd74f8dcac58e9f16748";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const SearchInput = document.querySelector(".search-bar input");
const SearchBtn = document.querySelector(".search-bar button");
const temp = document.querySelector(".weather h1"); 
const cityName = document.querySelector("h2");
const humidity = document.querySelector(".Humidity ");
const wind = document.querySelector(".Wind ");





async function checkWeather(city) {
    try {
        const response = await fetch(
            `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found or API error");
        }

        const data = await response.json();
        temp.innerHTML = data.main.temp + "°C";
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%"; 
        wind.innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main === "Clouds") {
            document.querySelector(".weather-img").src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Clear") {
            document.querySelector(".weather-img").src = "images/clear.png";
        }
        else if(data.weather[0].main === "Rain") {
            document.querySelector(".weather-img").src = "images/rainy.png";
        }
        else if(data.weather[0].main === "Drizzle") {
            document.querySelector(".weather-img").src = "images/rain.png";
        }
        else if(data.weather[0].main === "Haze") {
            document.querySelector(".weather-img").src = "images/mist.png";
        }
        else if(data.weather[0].main === "Snow") {
            document.querySelector(".weather-img").src = "images/snow.png";
        }
       
        console.log(data);  

        
    } 
    catch (error) {
        console.error("Weather fetch failed:", error.message);
    }
}
SearchBtn.addEventListener("click", () => {
    checkWeather(SearchInput.value);

})

checkWeather("Nagpur");
