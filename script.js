
document.getElementById('btn-search').addEventListener('click',()=>{
    let cityInput=document.getElementById('city').value ;
    if(cityInput!="")
    weatherCall(cityInput);
})

function weatherCall(cityInput)
{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=6336718018b34e110d4b1de576a4aeb7`)
.then(res=>res.json())
.then(city=>{
    // console.log(city)
    let name=city.name;
    let weather=city.weather[0].main;
    let temp=city.main.temp;
    let icon=city.weather[0].icon;

    document.getElementById('city-name').innerText=name;
    document.getElementById('city-weather').innerText=weather;
    document.getElementById('city-temp').innerText=temp;
    document.getElementById('weather-icon').src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
});
}

