
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".links a");

function updateNavbar() {
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 10);
    }
}

window.addEventListener("scroll", updateNavbar);
updateNavbar();

// Close the mobile menu after selecting a page.
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (menuToggle) {
            menuToggle.checked = false;
        }
    });
});

// Close the menu when clicking outside the navigation.
document.addEventListener("click", function (event) {
    const navbarElement = document.querySelector(".navbar");

    if (
        menuToggle &&
        navbarElement &&
        !navbarElement.contains(event.target)
    ) {
        menuToggle.checked = false;
    }
});

// Allow the menu button to be operated using the keyboard.
if (hamburger && menuToggle) {
    hamburger.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            menuToggle.checked = !menuToggle.checked;
        }
    });
}
