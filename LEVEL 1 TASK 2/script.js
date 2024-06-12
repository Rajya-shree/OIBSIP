document.addEventListener('DOMContentLoaded', () => {
    // Hero section form interaction
    const form = document.querySelector('.hero-content form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = form.querySelector('input').value;
        alert(`You searched for: ${query}`);
    });

    // Smooth scroll to sections
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});