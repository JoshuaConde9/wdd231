document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("members-container");
    const gridBtn = document.getElementById("grid-view");
    const listBtn = document.getElementById("list-view");

    container.classList.add("grid");
    gridBtn.classList.add("active");

    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displayMembers(members) {
        container.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <div class="member-info">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
            ${member.description ? `<p>${member.description}</p>` : ""}
        </div>
        `;

            container.appendChild(card);
        });
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 3:
                return "Gold Member";
            case 2:
                return "Silver Member";
            case 1:
                return "Member";
            default:
                return "Unknown";
        }
    }

    gridBtn.addEventListener("click", () => {
        container.classList.remove("list");
        container.classList.add("grid");
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", () => {
        container.classList.remove("grid");
        container.classList.add("list");
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
    });

    loadMembers();
});
