const apiKey = "00d44dc55112adf5789e635d8e0e3623";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icons");

async function checkweather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "clouds"){
    weatherIcon.src = "image/clouds.png";
}else if(data.weather[0].main == "clear"){
    weatherIcon.src = "image/clear.png";
}else if(data.weather[0].main == "rain"){
    weatherIcon.src = "image/rain.png";
}else if(data.weather[0].main == "drizzle"){
    weatherIcon.src = "image/drizzle.png";
}else if(data.weather[0].main == "mist"){
    weatherIcon.src = "image/mist.png";
}
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

checkweather();
