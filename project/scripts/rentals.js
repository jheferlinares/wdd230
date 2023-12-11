const linksURL = "https://jheferlinares.github.io/wdd230/project/data/rentals.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
getLinks();

function displayLinks(weeks) {
  const linksContainer = document.querySelector('#resume');

  weeks.rentals.forEach((name) => {
    const weekNumber = name.name;
    const links = name.summary;
    const linksList = document.createElement('div');
    linksList.setAttribute('class', "principal");
    linksList.textContent = weekNumber;

    links.forEach((link) => {
      const listItem = document.createElement('div');
      listItem.setAttribute('class', "nose");
      const hola = document.createElement('p');
      const anchor = document.createElement('p');
      let text = document.createTextNode(" - ");
      hola.setAttribute("class","aver")
      anchor.setAttribute("class","aver")
      hola.textContent = link.type;
      anchor.textContent = link.person;


        listItem.appendChild(hola);
        listItem.appendChild(text);
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
        linksContainer.appendChild(linksList);
    });
  });
}
