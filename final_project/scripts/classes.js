const container = document.querySelector("#classContainer");
const modal = document.querySelector("#classModal");
const modalContent = document.querySelector("#modalContent");

async function loadClasses() {
    try {
        const response = await fetch("data/classes.json");
        const data = await response.json();

        data.forEach(item => {
            const card = document.createElement("article");

            card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p><strong>Trainer:</strong> ${item.trainer}</p>
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Difficulty:</strong> ${item.difficulty}</p>
            <p><strong>Schedule:</strong> ${item.schedule}</p>
            <button data-id="${item.id}">View Details</button>
        `;

            container.appendChild(card);
        });

        document.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                const selected = data.find(c => c.id == btn.dataset.id);
                modalContent.innerHTML = `
          <h3>${selected.name}</h3>
          <p>Trainer: ${selected.trainer}</p>
          <p>${selected.schedule}</p>
        `;
                modal.showModal();
            });
        });

    } catch (error) {
        container.innerHTML = "<p>Error loading classes.</p>";
    }
}

loadClasses();

document.querySelector("#closeModal").addEventListener("click", () => {
    modal.close();
});
