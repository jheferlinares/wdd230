const baseURL = "https://jheferlinares.github.io/wdd230/";
const linksURL = "https://jheferlinares.github.io/wdd230/project/data/prices.json";
const cards = document.querySelector('#prices-content');

async function getCompaniesData() {
  const response = await fetch(linksURL);
  const data = await response.json();
 displayCompanies(data.rentals);
}

getCompaniesData();

const displayCompanies = (rentals) => {
    rentals.forEach((rental) => {
      let card = document.createElement('section');
      card.setAttribute('id','ecard')
      let name = document.createElement('h3');
      let type = document.createElement("h4");
      let MaxPersons = document.createElement("p");
      let HalfDay = document.createElement("p");
      let FullDay = document.createElement("p");
      let portrait = document.createElement('img');

      name.textContent = rental.name;
      type.textContent = `Type: ${rental.type}`;
      MaxPersons.textContent = `Max. Persons: ${rental.MaxPersons}`;
      HalfDay.textContent = `Half Day(3 hrs): ${rental.HalfDay}`;
      FullDay.textContent = `Full Day: ${rental.FullDay}`;
      portrait.setAttribute('src', rental.image);
      portrait.setAttribute('alt', `Portrait of ${rental.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '200');
      portrait.setAttribute('height', '180');
      portrait.setAttribute('id', 'e-image');
      portrait.setAttribute('background-color', 'white');
  
      card.appendChild(name);
      card.appendChild(type);
      card.appendChild(MaxPersons);
      card.appendChild(HalfDay);
      card.appendChild(FullDay);
      card.appendChild(portrait);
      cards.appendChild(card);
    });
  };