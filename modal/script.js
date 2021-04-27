// SELECT ELEMENTS (MODAL, OPEN MODAL BTN, CLOSE MODAL BTN, OVERLAY)
const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const overlay = document.querySelector('#overlay');

// CREATE CLICK EVENT LISTENER FOR THE OPEN-MODAL-BTN THAT ADDS CLASS OPEN TO MODAL + OVERLAY
openModalBtn.addEventListener('click', () => {
  modal.classList.add('open');
  overlay.classList.add('open');
});

// CREATE CLICK EVENT LISTENER FOR THE CLOSE-MODAL BTN THAT REMOVES OPEN CLASS FROM MODAL + OVERLAY
closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// CREATE CLICK EVENT LISTENER FOR OVERLAY THAT REMOVES THE CLASS OPEN FROM THE MODAL AND THE OVERLAY
function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
}
