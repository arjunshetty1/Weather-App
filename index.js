(async () => { const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
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
}

    catch (error) {
	console.error(error);

}

}
)
();