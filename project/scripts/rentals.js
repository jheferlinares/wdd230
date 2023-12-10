const linksURL = "https://jheferlinares.github.io/wdd230/project/data/rentals.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
getLinks();

function displayLinks(scooters) {
  const linksContainer = document.querySelector('#resume');

  scooters.rentals.forEach((name) => {
    const weekNumber = name.name;
    const links = name.summary;

    const linksList = document.createElement('div');
    linksList.textContent = weekNumber;

    const span = document.createElement('span');

    summary.forEach((summary) => {
      const listItem = document.createElement('h3');
      const anchor = document.createElement('p');
      let text = document.createTextNode("-");
      anchor.textContent = summary.type;

        span.appendChild(anchor);
        listItem.appendChild(span);
        span.appendChild(text);
        linksList.appendChild(span);
        linksContainer.appendChild(linksList);
    });
  });
}