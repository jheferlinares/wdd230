const baseURL = "https://jheferlinares.github.io/wdd230/";
const linksURL = "https://jheferlinares.github.io/wdd230/data/links.json";
const cards = document.querySelector(".card");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
getLinks();

function displayLinks(weeks) {
  const linksContainer = document.querySelector('.card1');

  weeks.lessons.forEach((lesson) => {
    const weekNumber = lesson.lesson;
    const links = lesson.links;

    const linksList = document.createElement('ul');
    linksList.textContent = `Week:${weekNumber} `;

    const span = document.createElement('span');

    links.forEach((link) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      let text = document.createTextNode("│");
      anchor.setAttribute('href', `${link.url}`);
      anchor.setAttribute('target', `_blank`);
      anchor.textContent = link.title;

        span.appendChild(anchor);
        listItem.appendChild(span);
        span.appendChild(text);
        linksList.appendChild(span);
        linksContainer.appendChild(linksList);
    });
  });
}









