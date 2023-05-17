const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const windowPopup = document.querySelector('#project-1');

const dataObj = [
  {
    id: 1,
    title: 'Multi Post Stories',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageLink: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    title: 'Profesional Art Printing Data More',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageLink: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'Data Dashboard Healthcare',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageLink: 'images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: '#',
    sourceLink: '#',
  },
];

windowPopup.addEventListener('click', () => {
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
