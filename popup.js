const modal = document.getElementById('modal');

const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

const projects = [
  {
    id: 1,
    projectName: 'Easy-Bank and TidCoin',
    description:
      'EasyBank is a revolutionary mobile application designed to empower individuals worldwide, regardless of their access to traditional banking services. In a world where not everyone has access to a bank account or a credit card, EasyBank aims to bridge the financial gap by leveraging the ubiquity of mobile phones.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: './images/Snapshoot Portfolio.png',
    live: 'https://easy-bank-tc.vercel.app/',
    source: 'https://github.com/aradradev/easyBankTC',
  },
  {
    id: 2,
    projectName: 'Population',
    description:
      'Population is a revolutionary mobile application designed to empower individuals worldwide, regardless of their access to traditional banking services. In a world where not everyone has access to a bank account or a credit card, EasyBank aims to bridge the financial gap by leveraging the ubiquity of mobile phones.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: './images/Snapshoot Portfolio.png',
    live: 'https://easy-bank-tc.vercel.app/',
    source: 'https://github.com/aradradev/easyBankTC',
  },
  {
    id: 3,
    projectName: 'Bookstore',
    description:
      'Bookstore is a revolutionary mobile application designed to empower individuals worldwide, regardless of their access to traditional banking services. In a world where not everyone has access to a bank account or a credit card, EasyBank aims to bridge the financial gap by leveraging the ubiquity of mobile phones.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: './images/Snapshoot Portfolio.png',
    live: 'https://easy-bank-tc.vercel.app/',
    source: 'https://github.com/aradradev/easyBankTC',
  },
];

function populateModalWithData(projectId) {
  const project = projects.find((proj) => proj.id === projectId);
  const modal = document.getElementById('modal');

  const modalContent = `
    <div class="text-container-row">
      <div class="container-desk">
        <div class="modal-title">
          <h2 class="mobile txt-modal">${project.projectName}</h2>
          <h2 class="hidden txt-modal">${project.projectName}</h2>
          <button data-close-button class="close-btn">&times;</button>
        </div>
        <div class="row-skills">
          <ul class="tech-list">
            ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="grid-template">
        <a class="snap" href="#"><img src="${
  project.image
}" alt="image popup"></a>
        <div class="grid">
          <div class="modal-text">
            <p class="mobile description-modal">${project.description}</p>
            <p class="hidden description-modal">${
  project.description
} <br/><br/>${project.description} </p>
          </div>
          <div class="buttons">
            <a href="${
  project.live
}">See Live <img src="images/Icon.png" alt="icon" class="live"></a>
            <a href="${
  project.source
}">See Source <img src="images/Icon.png" alt="icon" class="live"></a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.innerHTML = modalContent;
}

// Add event listeners to the "See project" buttons
const projectButtons = document.querySelectorAll('.btn-container');
projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    populateModalWithData(index + 1);
    openModal(modal);
  });
});

const closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
