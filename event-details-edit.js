import Modal from './modals.js';

const inputsEl = document.querySelectorAll('input');
const textareaEl = document.querySelector('textarea');
const saveBtn = document.querySelector('#save-btn');

inputsEl.forEach(el => {
    el.addEventListener('input', (e) => {
        saveBtn.disabled = false;
    })
})

textareaEl.addEventListener('input', (e) => {
    saveBtn.disabled = false;
})

const editModal = new Modal("Event edited!",
                            "The event was edited successfully.",
                            "",
                            "Continue",
                            "",
                            true,
                            "success",
                            "green",
                            eventEdit);
editModal.createModal();
editModal.addListener('#save-btn');

function eventEdit(result) {
    if(result.isConfirmed) window.location = 'event-details.html';
}
