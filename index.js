//-------------------Mumbai-----------------------------------------

const mumbai_pct = document.getElementById('mumbai_pct');
const mumbai_max_temp = document.getElementById('mumbai_max_temp');
const mumbai_min_temp = document.getElementById('mumbai_min_temp');


(async () => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12f33d9d95msh13bac54dd679c2cp151602jsn589175e76510',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        mumbai_pct.innerHTML = result.temp;
        mumbai_max_temp.innerHTML = result.max_temp;
        mumbai_min_temp.innerHTML = result.min_temp;
    }

    catch (error) {
        console.error(error);

    }

}
)
    ();


//------------------------------BLR---------------------------

const bangalore_pct = document.getElementById('bangalore_pct');
const bangalore_max_temp = document.getElementById('bangalore_max_temp');
const bangalore_min_temp = document.getElementById('bangalore_min_temp');


(async () => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12f33d9d95msh13bac54dd679c2cp151602jsn589175e76510',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        bangalore_pct.innerHTML = result.temp;
        bangalore_max_temp.innerHTML = result.max_temp;
        bangalore_min_temp.innerHTML = result.min_temp;
    }

    catch (error) {
        console.error(error);

    }

}
)
    ();



//------------------------------Delhi---------------------------

// const delhi_pct = document.getElementById('delhi_pct');
const delhi_max_temp = document.getElementById('delhi_max_temp');
const delhi_min_temp = document.getElementById('delhi_min_temp');


(async () => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12f33d9d95msh13bac54dd679c2cp151602jsn589175e76510',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        delhi_pct.innerHTML = result.temp;
        delhi_max_temp.innerHTML = result.max_temp;
        delhi_min_temp.innerHTML = result.min_temp;
    }

    catch (error) {
        console.error(error);

    }

}
)
    ();