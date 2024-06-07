//---------------------Main Search--------------------------------------

const main_search = document.getElementById("main_search");
const submit_btn = document.getElementById("submit_btn");
const main_search_max_temp = document.getElementById("main_search_max_temp");
const main_search_min_temp = document.getElementById("main_search_min_temp");
const main_search_sunrise = document.getElementById("main_search_sunrise");
const main_search_sunset = document.getElementById("main_search_sunset");
const main_search_wind_degrees = document.getElementById(
  "main_search_wind_degrees"
);
const main_search_speed = document.getElementById("main_search_speed");
const textInput = document.getElementById("textInput");
const main_search_humidity = document.getElementById("main_search_humidity");
const main_search_feels_like = document.getElementById(
  "main_search_feels_like"
);
const city_name = document.getElementById("city_name");
const main_weather = document.getElementById("hidden_block");
const spinner = document.getElementById("spinner");

async function place_name(city) {
  spinner.style.display = "block";

  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    main_weather.style.display = "block";

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    main_search.innerHTML = result.temp + "°C";
    main_search_feels_like.innerHTML =
      "Feels like " + "<b>" + result.feels_like + "°C" + "</b>";
    main_search_humidity.innerHTML =
      "Humidity of <b>" + result.humidity + "%" + "</b>";
    main_search_max_temp.innerHTML =
      "Max Temp " + "<b>" + result.max_temp + "°C" + "</b>";
    main_search_min_temp.innerHTML =
      "Min Temp " + "<b>" + result.min_temp + "°C" + "</b>";
    main_search_sunrise.innerHTML =
      "Sunrise at " + "<b>" + result.sunrise + "</b>";
    main_search_sunset.innerHTML =
      "Sunset at " + "<b>" + result.sunset + "</b>";
    main_search_wind_degrees.innerHTML =
      "Wind in Degrees " + "<b>" + result.wind_degrees + "°" + "</b>";
    main_search_speed.innerHTML =
      "Wind Speed of " + "<b>" + result.wind_speed + " m/s" + "</b>";
    city_name.innerHTML = city.charAt(0).toUpperCase() + city.slice(1);
  } catch (error) {
    console.error("API Request Error:", error);
    main_weather.style.display = "block";
  } finally {
    spinner.style.display = "none";
  }
}

submit_btn.addEventListener("click", (e) => {
  console.log("Button Clicked");
  e.preventDefault();
  place_name(textInput.value);
});

//-----------------------Dubai-----------------------------------------

const mumbai_max_temp = document.getElementById("mumbai_max_temp");
const mumbai_min_temp = document.getElementById("mumbai_min_temp");
const mumbai_pct = document.getElementById("mumbai_pct");

(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    mumbai_pct.innerHTML = result.temp;
    mumbai_max_temp.innerHTML = result.max_temp;
    mumbai_min_temp.innerHTML = result.min_temp;
  } catch (error) {
    console.error(error);
  }
})();

//------------------------------USA----------------------------------------

const bangalore_pct = document.getElementById("bangalore_pct");
const bangalore_max_temp = document.getElementById("bangalore_max_temp");
const bangalore_min_temp = document.getElementById("bangalore_min_temp");

(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=usa";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    bangalore_pct.innerHTML = result.temp;
    bangalore_max_temp.innerHTML = result.max_temp;
    bangalore_min_temp.innerHTML = result.min_temp;
  } catch (error) {
    console.error(error);
  }
})();

//------------------------------India----------------------------------------------

// const delhi_pct = document.getElementById('delhi_pct');
const delhi_max_temp = document.getElementById("delhi_max_temp");
const delhi_min_temp = document.getElementById("delhi_min_temp");

(async () => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=india";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    delhi_pct.innerHTML = result.temp;
    delhi_max_temp.innerHTML = result.max_temp;
    delhi_min_temp.innerHTML = result.min_temp;
  } catch (error) {
    console.error(error);
  }
})();

//---------------------------Other Cities-------------------------------

const cities = ["Canada", "Australia", "Singapore", "Iceland", "China"];

cities.forEach(async (city) => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const cityTempElement = document.querySelectorAll("." + city + "_pct");
    const cityMaxTemp = document.querySelectorAll("." + city + "_feels");
    const cityHumidity = document.querySelectorAll("." + city + "_humidity");
    const cityMax = document.querySelectorAll("." + city + "_max");
    const cityTemp = document.querySelectorAll("." + city + "_temp");

    cityTempElement.forEach((pct) => {
      pct.innerHTML = result.cloud_pct;
    });

    cityMaxTemp.forEach((feels) => {
      feels.innerHTML = result.feels_like;
    });

    cityHumidity.forEach((hum) => {
      hum.innerHTML = result.humidity;
    });

    cityMax.forEach((m) => {
      m.innerHTML = result.max_temp;
    });

    cityTemp.forEach((t) => {
      t.innerHTML = result.temp;
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
