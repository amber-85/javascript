// const apiKey='6735c20cd8c65b682b904e90';

let city=localStorage.getItem('searchCity')

const weatherInfo=document.querySelector(".weather__info")
const searchBtn=document.querySelector(".search__btn")
searchBtn.addEventListener('click',getCity);

function getCity(){
    city=document.getElementById("search__city").value;
    localStorage.setItem('searchCity',city)
}

// let city=prompt("please enter the city you want to search");

const url='https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=cmXALdOTUBvIdr5E2fIbjBL5fF1tTXTr';

async function getWeather(){
    response=await fetch(url);
    data=await response.json();
    console.log(data)
}


const weatherData=getWeather()

weatherInfo.innerHTML=weatherData