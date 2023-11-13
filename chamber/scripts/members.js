const baseURL = "https://jheferlinares.github.io/wdd230/";
const linksURL = "https://jheferlinares.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getCompaniesData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);
 // displayProphets(data.prophets);
}

getProphetData();

