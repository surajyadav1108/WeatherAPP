const { BuiltinTypeName } = require("@angular/compiler");

const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.locationInput');
const search = document.querySelector('.search');

let cityInput = "New Delhi";

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fecthWheatherData();
        app.style.opacity = "0";
    });
}); 

form.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert('Please type in a city name');
    } else {
        cityInput = search.value;
        fecthWheatherData();
        search.value = "";
        app.style.opacity = "0";
    }

    e.preventDefault();
})


function dayOfTheWeek(day,month,year) {

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return weekday[new DataTransfer(`${day}/${month}/${year}`).getDay()];
};

/*this is for the date and time */
const date = date.location.localtime;
const y = parseInt(date.substr(0, 4));
const m = parseInt(date.substr(5, 2));
const d = parseInt(date.substr(8, 2));
const time = date.substr(11);


dateOutput.innerHTML = `${dayofTheweek(d, m, y)} ${d}, ${m}, ${y}`;
timeOutput.innerHTML = time;

nameOutput.innerHTML = data.location.name;
const iconId = data.current.condition.icon.substr(
    /*here for icoon*/
)

icon.src = "./icons" + iconId;

cloudOutput.innerHTML = data.current.cloud + "%";
humidityOutput.innerHTML = data.current.humdidity + "%";
windOutput.innerHTML = data.current.wind_kph + "km/h";

let timeOfday = "day";

const code = data.current.condition.code; 

if(!data.current.is_day) {
    timeOfday = "night";
}

if(code == 1000) {
    app.style.backgroundImage = `url(./images/${timeofDay}/clear.jpg)`;
    btn.style.background = "#e5ba92";
    if(timeOfday == "night") {
        btn.style.background = "#181e27"; 
    }
}
/**for cloud */
else if  (
    code == 1003 ||
    code == 1006 ||
    code == 1009 ||
    code == 1030 ||
    code == 1069 ||
    code == 1087 ||
    code == 1135 ||
    code == 1273 ||
    code == 1276 ||
    code == 1279 ||
    code == 1282 
) {
    app.style.backgroundImage = `url(./images/${timeofDay}/cloudy.jpg)`; 
    btn.style.background = "#fa6d1b";
    if(timeofDay == "night") {
        btn.style.background = "#181e27";
    }
    /**for rain */
}  else if (
    code == 1063 ||
    code == 1069 ||
    code == 1072 ||
    code == 1150 ||
    code == 1153 ||
    code == 1180 ||
    code == 1183 ||
    code == 1189 ||
    code == 1192 ||
    code == 1195 ||
    code == 1204 || 
    code == 1207 || 
    code == 1240 || 
    code == 1243 || 
    code == 1246 || 
    code == 1249 || 
    code == 1252  
) {
    app.style.backgroundImage = 
     `url(./images/${timeofDay}/rainy.jpg)`;
    btn.style.background = "647d75";
    if (timeOfday == "night") {
        btn.style.background =  "#325c80";
    }

    /**and this one if for snow */
} else {
    app.style.backgroundImage = `url(./images/${timeofDay}/snowy .jpg)`;
    btn.style.background = "4d72aa";
    if(timeOfday == "night") {
        btn.style.background = "#1b1b1b";
    }
}

//fade in the padge 
app.style.opacity = "1";










