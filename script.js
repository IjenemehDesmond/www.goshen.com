// Navbar glass effect on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 80) {
    nav.style.background = 'rgba(15,15,20,0.95)';
    nav.style.boxShadow = '0 0 20px rgba(0,191,255,0.2)';
  } else {
    nav.style.background = 'rgba(15,15,20,0.7)';
    nav.style.boxShadow = 'none';
  }
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form feedback
document.querySelector('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! We’ll get back to you soon.');
  e.target.reset();
});