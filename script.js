const hambuger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu-link');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
