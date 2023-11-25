fetch('https://jheferlinares.github.io/wdd230/chamber/data/members.json')
      .then(response => response.json())
      .then(data => {
        const premiumMembers = data.companies.filter(company => company.membershiplevel === 'Gold' || company.membershiplevel === 'Silver');

        shuffleArray(premiumMembers);

        const spotlightContainer = document.getElementById('spotlight');
        for (let i = 0; i < Math.min(3, premiumMembers.length); i++) {
          const company = premiumMembers[i];
          const companyDiv = document.createElement('div');
          companyDiv.setAttribute("class","spotGrid")
          companyDiv.innerHTML = `
            <h3>${company.name}</h3>
            <p>Membership Level: ${company.membershiplevel}</p>
            <p>Address: ${company.address}</p>
            <p>Phone Number: ${company.phonenumber}</p>
            <p>Website: <a href="${company.url}" target="_blank">${company.url}</a></p>
            <img src="${company.image}" alt="${company.name} Image">
          `;
          spotlightContainer.appendChild(companyDiv);
        }
      })
      .catch(error => console.error('Error fetching data:', error));

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }