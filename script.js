const hambuger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu-link');
const closeBtn = document.getElementById('close-btn');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navMenu.classList.toggle('active');
  closeBtn.classList.toggle('active');
});

// validation form
const form = document.getElementById('form-input');
const email = document.getElementsByName('email');

const errorMsg = document.querySelector('.error');
const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

function isValid(e) {
  e.preventDefault();
  // cheking email value if it is the same as the regex pattern
  if (regex.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    errorMsg.innerText = 'The email should be in lower case';
  }
}

form.addEventListener('submit', (e) => {
  isValid(e);
});
