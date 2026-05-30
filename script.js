/* API KEY */

const apiKey = "acb38a22e8686cc75a7841d208a9bf29";

/* GET WEATHER */

async function getWeather(){

    /* GET INPUT VALUE */

    const city =
    document.getElementById("cityInput").value;

    /* CHECK EMPTY */

    if(city === ""){

        alert("Please enter city name");

        return;
    }

    /* API URL */

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try{

        /* FETCH DATA */

        const response =
        await fetch(url);

        const data =
        await response.json();

        /* ERROR */

        if(data.cod == "404"){

            alert("City not found");

            return;
        }

        /* TEMPERATURE */

        document.getElementById("temperature").innerHTML =
        Math.round(data.main.temp) + "°C";

        /* CITY */

        document.getElementById("city").innerHTML =
        data.name;

        /* DESCRIPTION */

        document.getElementById("description").innerHTML =
        data.weather[0].description;

        /* HUMIDITY */

        document.getElementById("humidity").innerHTML =
        data.main.humidity + "%";

        /* WIND */

        document.getElementById("wind").innerHTML =
        data.wind.speed + " km/h";

        /* ICON */

        const iconCode =
        data.weather[0].icon;

        document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    }

    catch(error){

        alert("Something went wrong");
    }

}