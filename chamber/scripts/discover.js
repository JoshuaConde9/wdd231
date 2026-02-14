import { places } from "../data/discover.mjs";

const container = document.querySelector("#discover-container");

places.forEach((place, index) => {
    const card = document.createElement("div");
    card.classList.add("discover-card");
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

    container.appendChild(card);
});


const banner = document.querySelector("#visit-message");
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    banner.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / 86400000);

    if (days < 1) {
        banner.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        banner.textContent = "You last visited 1 day ago.";
    } else {
        banner.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);
