// JavaScript code for dynamic project cards

// Projects data
const projects = [
  {
    id: 1,
    projectName: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'images/Img Placeholder (1).png',
  },
  {
    id: 2,
    projectName: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'images/Img Placeholder (1).png',
  },
  {
    id: 3,
    projectName: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    image: 'images/Img Placeholder (1).png',
  },
];

// Function to generate the desktop project cards dynamically
function generateDesktopProjectCards() {
  const projectContainer = document.querySelector('.project-container');

  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add(`projects-${index + 1}`, 'active');
    projectCard.setAttribute('id', `project-${index + 1}`);

    const cardContent = `
      <div class="cards-container-hidden">
        <div class="card-container">
          <h3 class="title-card">${project.projectName}</h3>
          <div class="desc">
            <p>${project.description}</p>
          </div>
          <div class="row-card-skills">
            <ul>
              ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
      <button data-modal-target="#modal" class="btn-project" type="submit">See project</button>
    `;

    projectCard.innerHTML = cardContent;
    projectContainer.appendChild(projectCard);
  });
}

// Function to generate the mobile project cards dynamically
function generateMobileProjectCards() {
  const projectContainer = document.querySelector('.cards-project.mobile');

  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('cards-container');

    const cardContent = `
      <div class="card-container">
        <h3 class="title-card">${project.projectName}</h3>
        <div class="desc">
          <p>${project.description}</p>
        </div>
        <div class="row-card-skills">
          <ul>
            ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
        </div>
        <button data-modal-target="#modal" class="btn" type="submit">See project</button>
      </div>
    `;

    projectCard.innerHTML = cardContent;
    projectContainer.appendChild(projectCard);
  });
}

// Call the functions to generate the project cards
generateDesktopProjectCards();
generateMobileProjectCards();

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

form.addEventListener('input', saveData);

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
