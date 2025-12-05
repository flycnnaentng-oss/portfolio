// Responsive burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission (front-end only)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your message has been sent (simulation).";
    form.reset();
});

// =============================
// View Project Button Functionality
// =============================
const viewButtons = document.querySelectorAll('.view-btn');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.dataset.project; // assumes you have data-project="1" etc.
        const projectImage = document.querySelector(`#project-image-${projectId}`);
        
        if (projectImage.style.display === 'block') {
            projectImage.style.display = 'none';
        } else {
            projectImage.style.display = 'block';
        }
    });
});

});

    


