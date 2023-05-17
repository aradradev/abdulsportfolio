const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// const seeProject = document.querySelector('.btn-project');
// const modal1 = document.querySelector('body');

// const dataObj = [{
//   projectId: '1',
//   title: 'Multi-Post Stories',
//   technologies: ['HTML', 'Boostrap', 'Ruby on Rails'],
//   featuredImage: 'images/Snapshoot Portfolio.png',
//   description: 'Lorem ipsum dolor sit amet',
//   linkLiveVersion: '#',
//   linkSource: '#',
// }];

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
