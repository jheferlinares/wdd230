// select HTML elements in the document
const section = document.createElement('section');
const p = document.createElement('p');
const h2 = document.createElement('h2');
const figure = document.createElement('figure');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');
const body = document.querySelector('body');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=10.47&lon=-66.90&units=imperial&appid=1873aed8d7b4e3a598c34d5e058ee348';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        
        const list = data['list'];
        console.log(list);
        displayResults(list[0]);
        displayResults(list[8]);
        displayResults(list[16]);
        displayResults(list[24]);

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function  displayResults(weatherData) {

  const section = document.createElement('section');
  const p = document.createElement('p');
  const h2 = document.createElement('h2');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');
  const body = document.querySelector('.grid');
    p.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>&deg;F`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);

    const arr = desc.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    const str2 = arr.join(" ");
    figcaption.textContent = str2;
    section.append(p);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    section.append(figure);
    body.append(section);
};

