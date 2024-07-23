let charactersContainer = document.getElementById("characters-container");
fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(result => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${result.image}" alt="${result.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${result.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${result.status}</p>
        <p class="character-detail"><span class="attribute">Species:</span> ${result.species}</p>
      `;
      charactersContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });