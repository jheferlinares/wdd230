const baseURL = "https://jheferlinares.github.io/wdd230/";
const linksURL = "https://jheferlinares.github.io/wdd230/project/data/prices.json";
const cards = document.querySelector('.grid');

async function getCompaniesData() {
  const response = await fetch(linksURL);
  const data = await response.json();
 displayCompanies(data.companies);
}

getCompaniesData();

const displayCompanies = (rentals) => {
    rentals.forEach((rental) => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      name.textContent = rental.name;
      card.appendChild(name);
      cards.appendChild(card);
    });
  };