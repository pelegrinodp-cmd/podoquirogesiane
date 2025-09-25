// main.js - menu toggle, reveal on scroll, small enhancements

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const btn = document.getElementById('btnMobile');
  const mobileNav = document.getElementById('mobileNav');

  btn.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });

  // Intersection Observer for reveals
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // optionally unobserve to run only once
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  reveals.forEach(r => io.observe(r));

  // Smooth small animation for nav links (highlight current section)
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(a => {
    a.addEventListener('click', () => {
      if (mobileNav.classList.contains('show')) {
        mobileNav.classList.remove('show');
      }
    });
  });
});
