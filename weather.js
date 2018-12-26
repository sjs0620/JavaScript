const weather = document.querySelector(".js-weather");
const API_KEY = "04bb4cada1eaf80679b5339609879080";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        // console.log(json);
        //debugger;
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude; //위도
    const longitude = position.coords.longitude; //경도
    const coordsObj = { //key=name이 같을땐 하나로 표현가능
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{ //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        // console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();