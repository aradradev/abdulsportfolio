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
const email = document.getElementById('emailfield');
const errorMsg = document.querySelector('#error');
const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

function isValid(e) {
  e.preventDefault();

  if (regex.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    errorMsg.innerText = 'The email should be in a valid format.';
  }
}

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMsg.textContent = 'Your email should be in lowercase.';
  }
  isValid(e);
});
