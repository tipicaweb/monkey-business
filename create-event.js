import Modal from './modals.js';

const createModal = new Modal("Event created!",
                              "The event was created successfully.",
                              "",
                              "Continue",
                              "",
                              true,
                              "success",
                              "green",
                              eventCreate);
createModal.createModal();

const cancelModal = new Modal("An error ocurred!",
                              "This event was not created. Please try again.",
                              "",
                              "Try again",
                              "Cancel",
                              true,
                              "error",
                              "green",
                              showSuccessModal);
cancelModal.createModal();
cancelModal.addListener('#save-btn');

function showSuccessModal(result) {
    if(result.isConfirmed) createModal.showModal();
}

function eventCreate(result) {
    if(result.isConfirmed) window.location = 'event.html';
}