var apiKey = "c3c66156b36559256410e2635fc229d3";

var input = document.getElementById("InpuTweather")
var result = document.getElementById("showResult")

function btn() {
    var cityTem = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityTem}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => check(data))


}


function check(data) {
    if (data.message) {
        result.innerHTML = `<h1>No City Found</h1>`
    }
    else {
        dataRec(data);
    }
}
function dataRec(data) {
    console.log(data)
    var main = data.main
    var district = data.name
    var weather = data.weather[0]
    var icon = weather.icon
    var coord = data.coord
    var lat = coord.lat
    var lon = coord.lon
   

    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => pollutionCheck(data))
    console.log(lat, lon)



    var iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
    // console.log(icon)
    // console.log(weather)
    var temparature = main.temp
    var cel = temparature - 273.15
    var celsius = Math.round(cel)
    //    console.log(celsius)

    result.innerHTML = `<h1>${celsius}° Celcius</h1> <p>${district} </p> <br> <img class="imGsize" src='${iconUrl}'>`

}

function defaultWeather(){



}



function pollutionCheck(data) {

    var list = data.list[0]
    var aqi = list.main.aqi;
    if (aqi == 5) {
        var newP = document.createElement('p');
        newP.innerText = 'Very Bad';
        newP.classList = 'air';
        newP.style.color = 'red'
        result.appendChild(newP);


    }
    if (aqi == 4) {
        var newP = document.createElement('p');
        newP.innerText = 'Poor';
        newP.classList = 'air';
        newP.style.color = 'brown'
        result.appendChild(newP);
    }
    if (aqi == 3) {
        var newP = document.createElement('p');
        newP.innerText = 'Moderate';
        newP.classList = 'air';
        newP.style.color = 'blue'
        result.appendChild(newP);
    }
    if (aqi == 2) {
        var newP = document.createElement('p');
        newP.innerText = 'Fair';
        newP.classList = 'air';
        newP.style.color = 'lime'
        result.appendChild(newP);
    }
    if (aqi == 1) {
        var newP = document.createElement('p');
        newP.innerText = 'good';
        newP.classList = 'air';
        newP.style.color = 'green'
        result.appendChild(newP);
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        result.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    // result.innerHTML = "Latitude: " + position.coords.latitude +
        // "<br>Longitude: " + position.coords.longitude;

        let lat=position.coords.latitude
        let lon=position.coords.longitude
        let coordUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        fetch(coordUrl)
        .then(res=> res.json())
        .then(data=> dataRec(data))
}
getLocation()