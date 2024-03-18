// Get the navbar element
const navbar = document.getElementById('navbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Check if the page has been scrolled
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});