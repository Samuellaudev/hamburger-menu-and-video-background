// Hamburger menu toggle functionality
const hamburgerMenu = document.getElementById('hamburgerMenu');
const showcase = document.querySelector('.showcase');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  showcase.classList.toggle('active');
  menu.classList.toggle('active');
});