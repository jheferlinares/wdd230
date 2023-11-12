const baseURL = "https://jheferlinares.github.io/wdd230/";
const linksURL = "https://jheferlinares.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const linksContainer = document.querySelector('.card1');

  weeks.lessons.forEach((lesson) => {
    const weekNumber = lesson.lesson;
    const links = lesson.links;

    const weekContainer = document.createElement('div');
    weekContainer.classList.add('week-container');

    const weekHeader = document.createElement('h3');
    weekHeader.textContent = `Week ${lesson}`;

    const linksList = document.createElement('ul');

    links.forEach((link) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.setAttribute('href', `${baseURL}${link.url}`);
      anchor.textContent = link.title;

      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    weekContainer.appendChild(weekHeader);
    weekContainer.appendChild(linksList);
    linksContainer.appendChild(weekContainer);
  });
}