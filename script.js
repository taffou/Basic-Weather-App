var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${mykey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else{
        var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windy").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./Assets/rainy.jpg";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./Assets/sunny.jpg";
    }else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./Assets/sunny_cloudy.jpg";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./Assets/mist.jpg";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})

