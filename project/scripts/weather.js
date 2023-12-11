
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&units=imperial&appid=1873aed8d7b4e3a598c34d5e058ee348";
const weatherInfo = document.querySelector('#weather');
const bannerMessage = document.querySelector('.banner');


async function getData(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            loadForecast(data);
        }else{
            throw Error(await response.text());
        }

    }catch(error){
        console.log(error);
    }
}
function loadForecast(data){ 
   const weatherCard = document.createElement('article');
   const weatherNow = document.createElement('div');
   const dayIcon = document.createElement('img');
   const dayNum = document.createElement('span');
   const speed = document.createElement('p');
   weatherNow.setAttribute("id","aver")
   dayNum.setAttribute('id', 'temp');
   const dayDescr = document.createElement('span');
   const weatherHead = document.createElement('h2');
   const forecastHead = document.createElement('h2');
   const iconsource = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
   const aychamo = data.list[0].main.temp_max;
   const aver = data.list[0].main.humidity;
   const nose = data.list[0].weather[0].main;
   const naguara = data.list[0].weather[0].id;
   const todayDesc = data.list[0].weather[0].description;
      
   weatherHead.textContent = "Current Weather"
   forecastHead.textContent = "Forecast"
   dayIcon.setAttribute('src', iconsource);
   dayIcon.setAttribute('alt', `Icon for ${todayDesc}`);
   dayIcon.setAttribute('width', '50');
   dayIcon.setAttribute('height', '50');
   dayIcon.setAttribute('id', 'imgWea')
   const aychamo2 = document.createElement("p")
   const aver2 = document.createElement("p")
   const naguara2 = document.createElement("p")
   const nose2 = document.createElement("p")

   aychamo2.textContent = `The highest temperature today: ${aychamo}°F`;
   aver2.textContent = `Humidity: ${aver}%`.toUpperCase();
   nose2.textContent = `Main: ${nose}`.toUpperCase();
   naguara2.textContent = `ID: ${naguara}`;
   
   dayNum.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;
   let indexOftempType = dayNum.innerHTML.length - 1;
   let temperature = Number(data.list[0].main.temp);
   let tC;
   if (dayNum[indexOftempType] == "C"){
    temperature = ((9/5) * temperature) + 32;
   }
   if (temperature <= 50 && speed > 3){
    
    tC = `${Math.round(35.74 + (0.6215 * temperature) - (35.75 * speed**0.16) + (0.4275 * temperature * speed ** 0.16))}&deg;F`;
   }else{
    tC = "N/A"
   }
   bannerMessage.appendChild(aychamo2);
   dayDescr.textContent = todayDesc.toUpperCase();
   weatherCard.appendChild(weatherHead);
   weatherNow.appendChild(naguara2);
   weatherNow.appendChild(nose2);
   weatherNow.appendChild(dayNum);
   weatherNow.appendChild(dayIcon);
   weatherNow.appendChild(dayDescr);
   weatherNow.appendChild(aver2);
   weatherCard.appendChild(weatherNow);
   weatherCard.appendChild(forecastHead);

   let i = 8;
   while( i < 25){
    let forecastWeather = document.createElement('div');
    forecastWeather.classList.add('weather-display');
    let forecasteDate = document.createElement('span');
    let forecastIcon = document.createElement('img');
    let forecastNum = document.createElement('span');
    let forecastDescr = document.createElement('span');
    let dateStr = data.list[i].dt_txt;
    dateStr = dateStr.substring(5,10);
  
     forecasteDate.textContent = dateStr;

     let forecastIconImage = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
     let fDesc = `  ${data.list[i].weather[0].description}`;
     forecastIcon.setAttribute('src', forecastIconImage);
     forecastIcon.setAttribute('alt', `icon for ${fDesc}`);
     forecastIcon.setAttribute('width', '50');
     forecastIcon.setAttribute('height', '50')
     forecastIcon.setAttribute('id', 'imgFore')

     forecastNum.innerHTML = `${Math.round(data.list[i].main.temp)}&deg;F`
     forecastDescr.textContent = fDesc.toUpperCase();
     
     forecastWeather.appendChild(forecasteDate);
     forecastWeather.appendChild(forecastIcon);
     forecastWeather.appendChild(forecastNum);
     forecastWeather.appendChild(forecastDescr);
     weatherCard.appendChild(forecastWeather);
     i += 8;    

   }  

   
  weatherInfo.append(weatherCard);
}

getData();

