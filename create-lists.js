import Selector from "./selectors.js";
import Modal from "./modals.js";

const selectorSegmentation = new Selector(document.getElementById('selector-segmentation'), [
    {name: 'Segmentation Hagfors 1 | 146 hits', value: 'hagfors1', selected: false, optionEl: {}},
    {name: 'Segmentation Hagfors 2 | 344 hits', value: 'hagfors2', selected: false, optionEl: {}},
    {name: 'Segmentation Halmstad | 360 hits', value: 'halmstad', selected: true, optionEl: {}},
    {name: 'Segmentation Haparanda 1 | 732 hits', value: 'haparanda1', selected: false, optionEl: {}},
    {name: 'Segmentation Haparanda 2 | 264 hits', value: 'haparanda2', selected: false, optionEl: {}},
    {name: 'Segmentation Haparanda 3 | 257 hits', value: 'haparanda3', selected: false, optionEl: {}}
], false);

selectorSegmentation.renderSelector();

const selectorGuest = new Selector(document.getElementById('selector-guest'), [
    {name: 'Lorem Ipsum | 48 y/o | Haparanda', value: 'lorem', selected: false, optionEl: {}},
    {name: 'Lorem Ipsum | 48 y/o | Haparanda', value: 'lorem', selected: false, optionEl: {}},
    {name: 'Lorem Ipsum | 48 y/o | Haparanda', value: 'lorem', selected: false, optionEl: {}},
    {name: 'Lorem Ipsum | 48 y/o | Haparanda', value: 'lorem', selected: false, optionEl: {}}
], false);

selectorGuest.renderSelector();

const detailsModal = new Modal("Edit guest",
    "",
    `
        <div class="flex flex-col gap-8 pt-6">
            <div class="flex gap-8">
                <div class="input-container w-1/2">
                    <input id="guest_name" class="component-input" type="text" placeholder=" " value="[User name]" required>
                    <label for="guest_name" class="component-label">Name</label>
                    <span class="input-error">*Required</span>
                    <span class="icon-error error-icon"></span>
                </div>
                <div class="input-container w-1/2">
                    <input id="guest_email" class="component-input" type="text" placeholder=" " value="lorem@gmail.com" required>
                    <label for="guest_email" class="component-label">Email</label>
                    <span class="input-error">*Required</span>
                    <span class="icon-error error-icon"></span>
                </div>
            </div>
            <div class="flex gap-8">
                <div class="input-container w-1/2">
                    <input id="guest_phone" class="component-input" type="text" placeholder=" " required>
                    <label for="guest_phone" class="component-label">Phone</label>
                    <span class="input-error">*Required</span>
                    <span class="icon-error error-icon"></span>
                </div>
                <div class="input-container w-1/2">
                    <input id="guest_hometown" class="component-input" type="text" placeholder=" " required>
                    <label for="guest_hometown" class="component-label">Hometown</label>
                    <span class="input-error">*Required</span>
                    <span class="icon-error error-icon"></span>
                </div>
            </div>
            <div class="flex gap-8">
                <div class="input-container w-1/4">
                    <input id="guest_age" class="component-input" type="text" placeholder=" " required>
                    <label for="guest_age" class="component-label">Age</label>
                    <span class="input-error">*Required</span>
                    <span class="icon-error error-icon"></span>
                    <div class="input-icon">
                        <span class="icon-arrowD base-icon rotate-180"></span>
                        <span class="icon-arrowD base-icon"></span>
                    </div>
                </div>
                <div class="input-container select-container w-1/4">
                    <select id="guest_gender" class="component-input">
                        <option value="market">Man</option>
                        <option value="market">Woman</option>
                    </select>
                    <label for="guest_select" class="component-label">Gender</label>
                    <div class="input-icon">
                        <span class="base-icon icon-arrowD"></span>
                    </div>
                </div>
                <div class="input-container w-1/4">
                    <input id="guest_free" class="component-input" type="text" placeholder=" " value="1" required>
                    <label for="guest_free" class="component-label">Extras free</label>
                    <span class="input-error">*Required</span>
                    <span class="icon-error error-icon"></span>
                    <div class="input-icon">
                        <span class="icon-arrowD base-icon rotate-180"></span>
                        <span class="icon-arrowD base-icon"></span>
                    </div>
                </div>
                <div class="input-container w-1/4">
                    <input id="guest_paying" class="component-input" type="text" placeholder=" " value="2" required>
                    <label for="guest_paying" class="component-label">Extras paying</label>
                    <span class="input-error">*Required</span>
                    <span class="icon-error error-icon"></span>
                    <div class="input-icon">
                        <span class="icon-arrowD base-icon rotate-180"></span>
                        <span class="icon-arrowD base-icon"></span>
                    </div>
                </div>
            </div>

            <div class="input-container w-full">
                <input id="guest_notes" class="component-input" type="text" placeholder=" " required>
                <label for="guest_notes" class="component-label">Notas</label>
                <span class="input-error">*Required</span>
                <span class="icon-error error-icon"></span>
            </div>
            <div></div>
        </div>
    `,
    "Save",
    "Cancel",
    false,
    "",
    "green",
    () => {},
    true);

detailsModal.createModal();
detailsModal.modalSettings.customClass.popup += ' modal-large'
detailsModal.addListener('#edit-btn');


const cancelModal = new Modal("Cancel guest lists?",
                                "Are you sure you want to cancel this guest lists?",
                                "",
                                "Cancel",
                                "Back",
                                false,
                                "",
                                "red",
                                navigateToGuestLists);
cancelModal.createModal();
cancelModal.addListener('#btn-cancel');

const createModal = new Modal("Guest lists created!",
                                "Your guest lists was created successfully.",
                                "",
                                "Continue",
                                "Cancel",
                                true,
                                "success",
                                "green",
                                navigateToGuestLists);
createModal.createModal();
createModal.addListener('#btn-confirm');

function navigateToGuestLists(result) {
    if(result.isConfirmed) window.location = 'guest-lists.html'
}

const removeModal = new Modal("Remove user?",
                                "Are you sure you want to remove this user from this guest lists?",
                                "",
                                "Remove",
                                "Back",
                                false,
                                "",
                                "red");
removeModal.createModal();
removeModal.addListener('.btn-remove');