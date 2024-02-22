const apiKey = '35fb23f5c633b4c8d599799a293a7b08'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById("locationInput");
const locationElem  = document.getElementById('location');
const temp = document.getElementById("temp");
const des  =document.getElementById("description");
const searchButton =  document.getElementById("btn");

searchButton.addEventListener('click',()=>{
    const location =  locationInput.value
    if(location){
        fetchWeather(location);
    }
});


function fetchWeather(location){

const url =`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`
fetch(url)
.then((response)=>{
    return response.json()
}).then((data)=>{
    locationElem.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)}°C`
    des.textContent = data.weather[0].description;
}).catch((error)=>{
    console.error("error to fetching weather data",error);
})
}
