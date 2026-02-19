const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span> / Dracarys Gym / Colombia`;

const lastModifiedDate = document.lastModified;
lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
