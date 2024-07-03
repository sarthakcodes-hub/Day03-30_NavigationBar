const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
