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
const email = document.getElementById('email');
const fullName = document.getElementById('name');
const message = document.getElementById('comment');
const errorMsg = document.getElementById('error');
const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

// Check if there's a saved email in localStorage
const savedEmail = localStorage.getItem('email');
if (savedEmail) {
  email.value = savedEmail;
}

// Check if there's a saved full name in localStorage
const savedName = localStorage.getItem('fullName');
if (savedName) {
  fullName.value = savedName;
}

// Check if there's a saved first Message in localStorage
const savedMsg = localStorage.getItem('message');
if (savedMsg) {
  message.value = savedMsg;
}

function isValid(e) {
  e.preventDefault();

  if (regex.test(email.value)) {
    form.submit();
    form.reset();
    // Save all  localStorage
    localStorage.setItem('email', email.value);
    localStorage.setItem('fullName', fullName.value);
    localStorage.setItem('message', message.value);
  } else if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMsg.innerText = 'Your email should be in lowercase.';
  }
}

form.addEventListener('submit', (e) => {
  isValid(e);
});

// Update localStorage every time the user types a valid email
email.addEventListener('input', () => {
  if (regex.test(email.value)) {
    localStorage.setItem('email', email.value);
  }
});

// Update localStorage every time when the user types a Name
fullName.addEventListener('input', () => {
  localStorage.setItem('lName', fullName.value);
});

message.addEventListener('input', () => {
  localStorage.setItem('message', message.value);
});
