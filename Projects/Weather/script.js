async function fetchData() {
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '191cefa8d4msh746acb195accc25p117610jsn3f0435c5a927',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
	
	cloud_pct.innerHTML = response.cloud_pct
	temp.innerHTML = response.temp
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_degrees.innerHTML = response.wind_degrees
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset

} catch (error) {
	console.error(error);
}
}
fetchData();