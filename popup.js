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
    projectName: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    image: './images/Snapshoot Portfolio.png',
    live: '#',
    source: '#',
  },
];

// Get modal element
const modal = document.getElementById('modal');

const generalHTML = (project) => `
  <div class="text-container-row">
  <div class="container-desk">
    <div class="modal-title">
    <h2 class="mobile txt-modal">${project.projectName}</h2>
    <h2 class="hidden txt-modal">Keeping track of hundreds  of components website</h2>
      <button data-close-button class="close-btn">&times;</button>
    </div>
    <div class="row-skills">
    <ul class="tech-list">
      ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    </div>
  </div>
  <div class="grid-template">
  <a class="snap" href="#"><img src="${project.image}" alt="image popup"></a>
    <div class="grid">
      <div class="modal-text">
        <p class="mobile description-modal">${project.description}</p>
        <p class="hidden description-modal">${project.description} <br/><br/>${project.description} </p>
      </div>
      <div class="buttons">
        <a href="${project.live}">See Live <img src="images/Icon.png" alt="icon" class="live"></a>
        <a href="${project.source}">See Live <img src="images/Icon.png" alt="icon" class="live"></a>
      </div>
    </div>
  </div>
</div>`;

projects.forEach((project) => {
  modal.insertAdjacentHTML('beforeend', generalHTML(project));
});

// Get image element inside modal
const modalImage = document.getElementById('modal-image');

// Loop through projects array and create an event listener for each one
projects.forEach((project) => {
  const button = document.createElement('button');
  button.innerText = project.projectName;
  button.addEventListener('click', () => {
    modalImage.src = project.image;
    modal.querySelector('.modal-title').innerText = project.projectName;
    modal.querySelector('.modal-description').innerText = project.description;
    modal.querySelector('.modal-live').href = project.live;
    modal.querySelector('.modal-source').href = project.source;
    modal.querySelector('.tech-list').innerHTML = '';
    project.technologies.forEach((technology) => {
      const techListItem = document.createElement('li');
      techListItem.innerText = technology;
      modal.querySelector('.tech-list').appendChild(techListItem);
    });
    modal.style.display = 'block';
  });
});
const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
