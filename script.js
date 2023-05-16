const hambuger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu-link');
const closeBtn = document.getElementById('close-btn');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navMenu.classList.toggle('active');
  closeBtn.classList.toggle('active');
});
