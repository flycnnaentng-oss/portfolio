// -----------------------------
// DARK & LIGHT MODE TOGGLE
// -----------------------------

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme if available
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.add(savedTheme);

    if (savedTheme === "dark-mode") {
        toggleButton.textContent = "Light Mode";
    }
}

// Handle toggle button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Switch button text & save theme
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = "Light Mode";
        localStorage.setItem('theme', 'dark-mode');
    } else {
        toggleButton.textContent = "Dark Mode";
        localStorage.setItem('theme', 'light-mode');
    }
});


// -----------------------------
// OPTIONAL: SMOOTH SCROLLING
// -----------------------------

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();

            const section = document.querySelector(this.hash);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// -----------------------------
// OPTIONAL: MOBILE MENU TOGGLE
// -----------------------------

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('nav ul');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}
