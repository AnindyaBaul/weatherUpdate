var InpuTweather = document.getElementById("InpuTweather");
var result = document.getElementById("showResult");

var apiKey = "c3c66156b36559256410e2635fc229d3"

function btn() {
    var cityWeather = InpuTweather.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=${apiKey}`)

        .then(res => res.json())
        .then(data => dataRec(data))
}

function dataRec(data) {
    var main = data.main;
    var temp = main.temp
    var celsius = temp - 273.15;
    var round = Math.round(celsius)



var weather=data.weather[0];
var icon=weather.icon;

    

      result.innerHTML=`<h1>${round}° celcius </h1> <br> <img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
}