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
      const data = await response.json(); // Parse the response as JSON
  
      // Select HTML elements by ID
      const cloud_pct = document.getElementById('cloud_pct');
      const temp = document.getElementById('temp');
      const feels_like = document.getElementById('feels_like');
      const humidity = document.getElementById('humidity');
      const min_temp = document.getElementById('min_temp');
      const max_temp = document.getElementById('max_temp');
      const wind_speed = document.getElementById('wind_speed');
      const wind_degrees = document.getElementById('wind_degrees');
      const sunrise = document.getElementById('sunrise');
      const sunset = document.getElementById('sunset');
  
      // Update HTML elements with data from the API
      cloud_pct.innerHTML = response.cloud_pct + '%';
      temp.innerHTML = response.temp + '°C';
      feels_like.innerHTML = response.feels_like + '°C';
      humidity.innerHTML = response.humidity + '%';
      min_temp.innerHTML = response.min_temp + '°C';
      max_temp.innerHTML = response.max_temp + '°C';
      wind_speed.innerHTML = response.wind_speed + 'm/s';
      wind_degrees.innerHTML = response.wind_degrees + '°';
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  