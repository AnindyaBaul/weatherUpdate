var apiKey="c3c66156b36559256410e2635fc229d3";

var input=document.getElementById("InpuTweather")
var result=document.getElementById("showResult")

function btn(){
    var cityTem=input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityTem}&appid=${apiKey}`)
    .then(res => res.json())
    .then (data =>check(data))
   
}
function check(data){
    if(data.message){
        result.innerHTML=`<h1>No City Found</h1>`
    }
    else{
        dataRec(data);
    }
}
function dataRec(data){
    console.log(data)
    var main=data.main
    var district=data.name
    var weather=data.weather[0]
    var icon=weather.icon

    var iconUrl=`http://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(icon)
    console.log(weather)
    var temparature=main.temp
    var cel=temparature-273.15
   var celsius=Math.round(cel)
   console.log(celsius)

   result.innerHTML=`<h1>${celsius}° Celcius</h1> <p>${district} </p> <br> <img class="imGsize" src='${iconUrl}'>`
   
}

