const visitMessage = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! This is your first visit.";
} else {
    const difference = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (difference === 0) {
        visitMessage.textContent = "Welcome back! You visited earlier today.";
    } else if (difference === 1) {
        visitMessage.textContent = "You visited 1 day ago.";
    } else {
        visitMessage.textContent = `You visited ${difference} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);