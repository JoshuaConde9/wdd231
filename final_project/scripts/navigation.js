const menuButton = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
const icon = document.querySelector("#menuBtn .icon");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        icon.textContent = "✖";
    } else {
        icon.textContent = "☰";
    }
});


const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
