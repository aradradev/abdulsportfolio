const hambuger = document.getElementById('hamburger');
const navMenu = document.getElementById('menu-link');
const closeBtn = document.getElementById('close-btn');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navMenu.classList.toggle('active');
  closeBtn.classList.toggle('active');
});

// Retrieve saved data from localStorage and fill in form fields
const form = document.getElementById('form-input');
const email = document.getElementById('email');
const fullName = document.getElementById('name');
const message = document.getElementById('comment');
const errorMsg = document.getElementById('error');
const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

// Helper function to save data in localStorage

function saveData() {
  const formData = {
    fullname: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formInputData', JSON.stringify(formData));
}

form.addEventListener('submit', saveData);

function isValid(e) {
  e.preventDefault();

  if (regex.test(email.value)) {
    form.submit();
    form.reset();
  } else if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMsg.innerText = 'Your email should be in lowercase.';
  }
}

form.addEventListener('submit', (e) => {
  isValid(e);
});

// Update localStorage get data
window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('formInputData'));
  if (savedData) {
    email.value = savedData.email;
    fullName.value = savedData.fullname;
    message.value = savedData.message;
  }
});
