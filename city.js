let imgBack;
let city = "Москва";
let fall ='Москва';


// QuerySelector
let back = document.querySelector(".city_container");
let city_main = document.querySelector(".city_main");
let city_name = document.querySelector(".city");
let img_main = document.querySelector(".img_main");
let temp = document.querySelector(".temp");
let type = document.querySelector(".type");
let feel = document.querySelector(".feel");
let days = document.querySelector(".days");
let futureDays = document.querySelector(".future");

getCityLS();




weatherNow(city);
coordCity(city);
// запрос погоды сейчас

function weatherNow(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=053fe27394a78c563cb71beadaab21b9`
  )
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res;
      } else {
        throw new Error("Данные не получены. Введите город повторно.");
      }
    })

    .then((res) => res.json())

    .then(function (data) {
        console.log(data);
        fall = city;
        let out = '';
        let weatherNumber = data.weather[0].icon;
        if (document.documentElement.clientWidth < 720){
            out += '<div class="city_date">';
            out += '<div class="city-back">';
            out += `<h1 class="city">${city}</h1>`;
            out += '<p class="text">погода сейчас</p>';
            out += '<div class="container">';
            out += `<div  class="img_main"><img src = "https://openweathermap.org/img/wn/${weatherNumber}@2x.png" alt=""></div>`;
            out += `<div class="temp">${Math.round(
              data.main.temp - 273
            )}°</div>`;
            out += '</div>';
            out += `<div class="type">${mainWeather(weatherNumber)}</div>`;
            out += `<p class="feel">Ощущается как ${Math.round(data.main.feels_like - 273)}°</p>`;
            out += '</div>';
            out += '<div class="add">';
            out += `<div class="term"><img src="img/term.png" alt="">${Math.round(
              (data.main.pressure)/1.333223684
            )} мм.рт.ст.</div>`;
            out += `<div class="vlazn"><img src="img/drop.png" alt="">${data.main.humidity}%</div>`;
            out += `<div class="veter"><img src="img/wind.png" alt="">${Math.round(data.wind.speed)}м/с</div>`;
            
            out += '</div>';
            out += '</div>';
            
           
            
            
                
                    
                
               
        } else{
            out += '<div class="city_date">';
            out += '<div class="city-back">';
            out += `<h1 class="city">${city}</h1>`;
            out += '<p class="text">погода сейчас</p>';
            out += '<div class="container">';
            out += `<div  class="img_main"><img src = "https://openweathermap.org/img/wn/${weatherNumber}@2x.png" alt=""></div>`;
            out += `<div class="temp">${Math.round(
              data.main.temp - 273
            )}°</div>`;
            out += "</div>";
            out += `<div class="type">${mainWeather(weatherNumber)}</div>`;
            out += `<p class="feel">Ощущается как ${Math.round(data.main.feels_like - 273)}°</p>`;
            out += "</div>";
            out += '<div class="add">';
             out += `<div class="term"><img src="img/term.png" alt="">${Math.round(
               (data.main.pressure)/1.333223684
             )} мм.рт.ст.</div>`;
             out += `<div class="vlazn"><img src="img/drop.png" alt="">${data.main.humidity}%</div>`;
             out += `<div class="veter"><img src="img/wind.png" alt="">${Math.round(
               data.wind.speed
             )}м/с</div>`;
            
            out += '</div>';
            out += "</div>";
        }
            console.log(out)
        city_main.innerHTML = out;
            
            
            console.log(data);
    //   city_name.innerHTML = city;
    //   let weatherNumber = data.weather[0].icon;
    //   img_main.innerHTML = `<img src = "https://openweathermap.org/img/wn/${weatherNumber}@2x.png" alt="">`;
    //   temp.innerHTML = `${Math.round(data.main.temp - 273)}°`;
    //   type.innerHTML = data.weather[0].main;
    //   type.innerHTML = mainWeather(weatherNumber);
    //   feel.innerHTML = `Ощущается как ${Math.round(
    //     data.main.feels_like - 273
    //   )}°`;
      back.style.backgroundImage = `url(img/${backGround(weatherNumber)})`;

      let urlImg;
      // let timezone = (data.timezone/3600);
    })

    .catch((e) => {
      bad.innerHTML = e.message;
      console.log(e.message);
      
      localStor(fall)
    });

  function backGround(x) {
    if (document.documentElement.clientWidth < 768) {
      if (
        x == "02d" ||
        x == "02n" ||
        x == "03d" ||
        x == "03n" ||
        x == "04d" ||
        x == "04n"
      ) {
        return "clouds2.jpg";
      } else if (x == "09d" || x == "09n" || x == "10d" || x == "10n") {
        return "rain.avif";
      } else if (x == "11d" || x == "11n") {
        return "light.jpg";
      } else if (x == "13d" || x == "13n") {
        return "snow.jpg";
      } else if (x == "50d" || x == "50n") {
        return "fog.jpg";
      } else if (x == "01n") {
        return "moon2.jpg";
      } else {
        return "sun2.jpg";
      }
    } else {
      if (
        x == "02d" ||
        x == "02n" ||
        x == "03d" ||
        x == "03n" ||
        x == "04d" ||
        x == "04n"
      ) {
        return "clouds2.jpg";
      } else if (x == "09d" || x == "09n" || x == "10d" || x == "10n") {
        return "rain2.jpg";
      } else if (x == "11d" || x == "11n") {
        return "light2.jpg";
      } else if (x == "13d" || x == "13n") {
        return "snow2.jpg";
      } else if (x == "50d" || x == "50n") {
        return "fog2.jpg";
      } else if (x == "01n") {
        return "moon2.jpg";
      } else {
        return "sun2.jpg";
      }
    }
  }

  function mainWeather(x) {
    if (
      x == "02d" ||
      x == "02n" ||
      x == "03d" ||
      x == "03n" ||
      x == "04d" ||
      x == "04n"
    ) {
      return "Облачно";
    } else if (x == "09d" || x == "09n" || x == "10d" || x == "10n") {
      return "Дождь";
    } else if (x == "11d" || x == "11n") {
      return "Гроза";
    } else if (x == "13d" || x == "13n") {
      return "Снег";
    } else if (x == "50d" || x == "50n") {
      return "Туманно";
    } else if (x == "01n") {
      return "Ясно";
    } else {
      return "Ясно";
    }
  }
}

let future = {};

// получить координаты

function coordCity(city) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=053fe27394a78c563cb71beadaab21b9`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      let lat = Math.round(data[0].lat * 100) / 100;

      let lon = Math.round(data[0].lon * 100) / 100;

      sevenDays(lat, lon);
    });
}
// сегодня дата
let itsDate = new Date();
let itsDay = itsDate.getDate();

// прогноз
function sevenDays(lat, lon) {
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=053fe27394a78c563cb71beadaab21b9`;
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      

      let utc = data.city.timezone / 3600;
      let utcDay = utcDayF(utc);
      function utcDayF(utc) {
        if (utc + 15 >= 24) {
          throw new Error("Данные не получены. Введите город повторно.");
        } else {
          return utc + 15;
        }
      }
      console.log(utcDay);

      for (key in data.list) {
        let thenDate = new Date(data.list[key].dt_txt);
        console.log(itsDay + 5);

        if (thenDate.getDate() !== itsDay && thenDate.getHours() === 15) {
          if (typeof future[thenDate.getDate()] == "undefined") {
            future[thenDate.getDate()].date = data.list[key].dt_txt;
            future[thenDate.getDate()] = {};
            future[thenDate.getDate()].day = Math.round(
              data.list[key].main.temp - 273
            );
            future[thenDate.getDate()].icon = data.list[key].weather.icon;
          } else {
            future[thenDate.getDate()].date = data.list[key].dt_txt;
            future[thenDate.getDate()].day = Math.round(
              data.list[key].main.temp - 273
            );
            future[thenDate.getDate()].icon = data.list[key].weather[0].icon;
          }
        } else if (thenDate.getDate() !== itsDay && thenDate.getHours() === 3) {
          if (typeof future[thenDate.getDate()] == "undefined") {
            future[thenDate.getDate()] = {};
            future[thenDate.getDate()].night = Math.round(
              data.list[key].main.temp - 273
            );
          } else {
            future[thenDate.getDate()].night = Math.round(
              data.list[key].main.temp - 273
            );
          }
        }
      }

      console.log(future);
      let out = "";
      out += '<div class="future_container">';
      out += '<p class="text">Прогноз на ближайшие дни</p>';
      out += "<hr>";
      out += '<div class="days">';

    //   let date5 = new Date();
    //   console.log(date5)
    //   console.log(future[16].day);
    //   if (future[16].day === undefined) {
    //     console.log(77777);
    //   }

      for (key in future) {
        if (
          future[key].day === undefined ||
          future[key].night === undefined ||
          future[key].date === undefined
        ) {
          continue;
        } else {
          let dater = new Date(future[key].date);
          console.log(dater);

          if (document.documentElement.clientWidth < 720) {
            out += '<div class="day">';
            out += `<p class="date">${getDay(
              dater.getDay()
            )}, ${dater.getDate()}.${getMonth(dater.getMonth())}</p>`;
            out += `<img class="image" src="https://openweathermap.org/img/wn/${future[key].icon}@2x.png" alt="">`;
            out += '<div class="temp_string">';
            out += `<div class="temp_night_big">${future[key].night}°</div>`;
            out += `<div class="temp_day_big">${future[key].day}°</div>`;
            out += "</div>";
            out += `<div class="temp_night">${future[key].night}°</div>`;
            out += '<div class="images">';
            out += '<img class="moon" src="img/moon.png" alt="">';
            out += '<img  class="pointer" src="img/pointer.png" alt="">';
            out += '<img class="sun" src="img/sun.png" alt="">';
            out += '</div>';
            out += `<div class="temp_day">${future[key].day}°</div>`;
            out += '</div>';
          } else {
            out += '<div class="day">';
            out += `<p class="date">${getDay(
              dater.getDay()
            )}, ${dater.getDate()}.${getMonth(dater.getMonth())}</p>`;
            out += `<img class="image" src="https://openweathermap.org/img/wn/${future[key].icon}@2x.png" alt="">`;
            out += '<div class="temp_string">';
            out += `<div class="temp_night_big">${future[key].night}°</div>`;
            out += `<div class="temp_day_big">${future[key].day}°</div>`;
            out += "</div>";
            out += `<div class="temp_night">${future[key].night}°</div>`;
            out += '<div class="images">';
            out += '<img class="moon" src="img/moon.png" alt="">';
            out += '<img  class="pointer" src="img/pointer.png" alt="">';
            out += '<img class="sun" src="img/sun.png" alt="">';
            out += '</div>';
            out += `<div class="temp_day">${future[key].day}°</div>`;
            out += '</div>';
          }
        }
      }
      out += "</div>";
      out += "</div>";

      futureDays.innerHTML = out;
     
    })

    .catch((e) => {
      futureDays.innerHTML = "";
      console.log(99999999);
    });
}

function getDay(date) {
  switch (date) {
    case 0:
      return "Вc";
    case 1:
      return "Пн";
    case 2:
      return "Вт";
    case 3:
      return "Ср";
    case 4:
      return "Чт";
    case 5:
      return "Пт";
    case 6:
      return "Сб";
  }
}

function getMonth(date) {
  switch (date) {
    case 0:
      return "01";
    case 1:
      return "02";
    case 2:
      return "03";
    case 3:
      return "04";
    case 4:
      return "05";
    case 5:
      return "06";
    case 6:
      return "07";
    case 7:
      return "08";
    case 8:
      return "09";
    case 9:
      return "10";
    case 10:
      return "11";
    case 11:
      return "12";
  }
}

// кнопка

let button = document.querySelector(".btn");
let input = document.querySelector("input");
let bad = document.querySelector(".bad");

function getCity() {
  if (input.value == "") {
    bad.innerHTML = "введите название города";
  } else {
    city = input.value;
    console.log(city);
    

    weatherNow(city);
    coordCity(city);
    localStor(city);
    input.value = "";
    bad.innerHTML = "";
  }
}

button.addEventListener("click", getCity);

window.addEventListener("resize", sss);
let add = document.querySelector('.add');

function sss() 
{

   let width = window.screen.width;

    if( width >= 720)
    {
   	 console.log("normal");
     
    }
    else if(width < 720)
    {
   	 console.log("small");
     add.style.display = 'none';


    }
    
}

function localStor(city) {
  localStorage.setItem('city', city);

}

function getCityLS(){
  console.log(city)

  let cityLS = localStorage.getItem('city');
console.log (cityLS)
  if (cityLS !== null){
  city = cityLS;
  } else {
    console.log(city);
  }
}
