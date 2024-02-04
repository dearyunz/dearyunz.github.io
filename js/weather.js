// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");

const API_KEY = "75895ff148b4c62d194f03e0e5f16f3b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position);
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //백틱기억!!!
  //&units=metric URL뒤에 붙이면 섭씨온도

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.name, data.weather[0].main);
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
  //url에 들어가지않아도 JS가 가져옴!
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//argumnet 2개 필요(성공함수, 실패함수)
//https://openweathermap.org/ 좌표->날씨
