// ================================
// 1. HAMBURGER MENU
// ================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});


// ================================
// 2. SMOOTH SCROLLING
// ================================
const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ================================
// 3. SCROLL FADE-IN ANIMATION
// ================================
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(function(section) {
  observer.observe(section);
});