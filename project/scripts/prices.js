const baseURL = "https://jheferlinares.github.io/wdd230/";
const linksURL = "https://jheferlinares.github.io/wdd230/project/data/prices.json";
const cards = document.querySelector('.grid');

async function getCompaniesData() {
  const response = await fetch(linksURL);
  const data = await response.json();
 displayCompanies(data.companies);
}

getCompaniesData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let address = document.createElement("p");
      let phone = document.createElement("p");
      let url = document.createElement("a");
      let portrait = document.createElement('img');
      let level = document.createElement("p");
      let date = document.createElement("p");
  
      name.textContent = `${company.name}`;
      address.textContent = `Address: ${company.address}`;
      phone.textContent = `Phone number: ${company.phonenumber}`;
      url.setAttribute('href', `${company.url}`);
      url.setAttribute('target', `_blank`);
      url.textContent = `${company.url}`;
      card.setAttribute('class', 'ic');
      address.setAttribute('class', 'address');
      portrait.setAttribute('src', company.image);
      portrait.setAttribute('alt', `Portrait of ${company.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '400');
      portrait.setAttribute('height', '420');
      portrait.setAttribute('background-color', 'white');
      level.textContent = `Level of membership: ${company.membershiplevel}`;
      date.textContent = `Opening date: ${company.openingdate}`;
  
      card.appendChild(portrait);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(level);
      card.appendChild(date);
      card.appendChild(url);
  
      cards.appendChild(card);
    });
  };