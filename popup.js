const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const seeProject1 = document.querySelector('#project-1');

const dataObj = [{
  projectId: '1',
  title: 'Profesional Art Printing Data',
  technologies: ['HTML', 'Boostrap', 'Ruby on Rails'],
  featuredImage: 'images/Snapshoot Portfolio.png',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  linkLiveVersion: '#',
  linkSource: '#',
}];

seeProject1.addEventListener('click', () => {
  const titleEl = document.querySelector('.txt-modal');
  const techEl = document.querySelector('.row-skills ul');
  const descEl = document.querySelector('.description-modal');
  const liveEl = document.querySelector('.live');
  const sourceEl = document.querySelector('.source');

  // Clear out any existing content
  titleEl.innerHTML = '';
  techEl.innerHTML = '';
  descEl.innerHTML = '';
  liveEl.innerHTML = '';
  sourceEl.innerHTML = '';

  // Populate the modal with the dataObj content
  titleEl.innerHTML = dataObj[0].title;

  dataObj[0].technologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.innerHTML = tech;
    techEl.appendChild(techItem);
  });

  descEl.innerHTML = dataObj[0].description;
  liveEl.setAttribute('href', dataObj[0].linkLiveVersion);
  sourceEl.setAttribute('href', dataObj[0].linkSource);
});

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
