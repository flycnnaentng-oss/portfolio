// =============================
// Responsive burger menu
// =============================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// =============================
// Smooth scrolling
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =============================
// Contact form submission
// =============================
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your message has been sent (simulation).";
    form.reset();
});

// =============================
// PROJECT MODAL POPUP
// =============================
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");

// When clicking the View Project button
document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = btn.getAttribute("data-img");
        modalTitle.textContent = btn.getAttribute("data-title");
    });
});

// Close modal when clicking the X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the popup box
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

    

