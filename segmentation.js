import Modal from './modals.js'

const createModal = new Modal("Create segmentation",
                              "",
                              `<div class="input-container">
                                    <input placeholder=" " id="segmentation-create" class="component-input" value="[Segmentation name]" type="text">
                                    <label for="segmentation-create" class="component-label">Segmentation name</label>
                                </div>`,
                              "Continue",
                              "Cancel",
                              false,
                              "",
                              "green",
                              confirmCreate);
createModal.createModal();
createModal.addListener('#create-segmentation');

const deleteModal = new Modal("Delete segmentation?",
                              "Are you sure you want to delete this segmentation?",
                              ``,
                              "Delete",
                              "Cancel",
                              false,
                              "",
                              "red");
deleteModal.createModal();
deleteModal.addListener('.delete-segmentation');

function confirmCreate(result) {
    if(result.isConfirmed) {
        window.location = "create-segmentation.html";
    }
}