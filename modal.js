const modalEl = document.getElementById('delete-modal');
const buttonsEl = document.querySelectorAll('.btn-trash');

const cancelBtn = document.getElementById('modal-cancel');
const confirmBtn = document.getElementById('modal-confirm');

buttonsEl.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        modalEl.classList.remove('hidden');
    })
})

const hideModal = (event) => {
    event.preventDefault();

    modalEl.classList.add('hidden');
}

cancelBtn.addEventListener('click', hideModal);
confirmBtn.addEventListener('click', hideModal);