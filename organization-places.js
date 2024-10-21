import Selector from "./selectors.js";
import Modal from "./modals.js";

const placeModal = new Modal("Add place",
                    "",
                    `
                        <div class="flex flex-col gap-8 pt-6">
                            <div id="selector-address" class="selector-container" data-icon="true" data-iconID="selected-address">
                                <div class="input-container icon-left">
                                    <input type="text" placeholder=" " class="component-input" id="selector-input" autocomplete="off">
                                    <label for="selector-address" class="component-label">Search address*</label>
                                    <div class="input-icon">
                                        <span class="base-icon icon-search"></span>
                                    </div>
                                    <div class="input-icon !left-auto !right-0 !pl-0 !pr-3 hidden" id="selected-address">
                                        <span class="base-icon icon-check-circle !bg-primary_green"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-container">
                                <input id="place_name" class="component-input" type="text" placeholder=" " required>
                                <label for="place_name" class="component-label">Name</label>
                                <span class="input-error">*Required</span>
                                <span class="icon-error error-icon"></span>
                            </div>
                            <div class="input-container h-full">
                                <textarea id="place_description" class="component-input" rows="5" placeholder=" " required></textarea>
                                <label for="place_description" class="component-label">Description</label>
                                <span class="input-error">*Required</span>
                                <span class="icon-error error-icon"></span>
                            </div>
                            <div class="input-age flex justify-between items-center text-base font-normal">
                                <span>Set place as default on new events</span>
                                <div class="switch-container">
                                    <input type="checkbox" class="switch-input" id="switch-input">
                                    <span class="switch-span"></span>
                                </div>
                            </div>
                        </div>
                    `,
                    "Add",
                    "Cancel",
                    false,
                    "",
                    "green",
                    (result) => {
                        if(result.isConfirmed) {
                            let tableEl = document.querySelector('.table-component');
                            tableEl.classList.remove('hidden');

                            let buttonEl = document.querySelector('#title-btn');
                            buttonEl.classList.remove('hidden');

                            let entriesEl = document.querySelector('.entries-found');
                            entriesEl.classList.add('hidden');
                        }
                            
                    },
                    true);
placeModal.createModal();
placeModal.modalSettings.customClass.popup += ' modal-medium'
placeModal.addListener('.btn-add');

document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {

        const selectorAddress = new Selector(document.getElementById('selector-address'), [
            {name: 'Linnégatan, 114 47 Stockholm, Suecia', value: 'address1', selected: false, optionEl: {}},
            {name: 'Linnégatan, 120 43 Stockholm, Suecia', value: 'address2', selected: false, optionEl: {}},
            {name: 'Linnégatan, 99 76 Stockholm, Suecia', value: 'address3', selected: false, optionEl: {}},
            {name: 'Linnégatan, 245 82 Stockholm, Suecia', value: 'address4', selected: false, optionEl: {}}
        ], false);
        
        selectorAddress.renderSelector();
    })
})

const editModal = new Modal("Edit place",
                "",
                `
                    <div class="flex flex-col gap-8 pt-6">
                        <div id="selector-address" class="selector-container" data-icon="true" data-iconID="selected-address">
                            <div class="input-container icon-left">
                                <input type="text" placeholder=" " class="component-input" id="selector-input" autocomplete="off">
                                <label for="selector-address" class="component-label">Search address*</label>
                                <div class="input-icon">
                                    <span class="base-icon icon-search"></span>
                                </div>
                                <div class="input-icon !left-auto !right-0 !pl-0 !pr-3 hidden" id="selected-address">
                                    <span class="base-icon icon-check-circle !bg-primary_green"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-container">
                            <input id="place_name" class="component-input" type="text" placeholder=" " value="[Name]" required>
                            <label for="place_name" class="component-label">Name</label>
                            <span class="input-error">*Required</span>
                            <span class="icon-error error-icon"></span>
                        </div>
                        <div class="input-container h-full">
                            <textarea id="place_description" class="component-input" rows="5" placeholder=" " required>[Description]</textarea>
                            <label for="place_description" class="component-label">Description</label>
                            <span class="input-error">*Required</span>
                            <span class="icon-error error-icon"></span>
                        </div>
                        <div class="input-age flex justify-between items-center text-base font-normal">
                            <span>Set place as default on new events</span>
                            <div class="switch-container">
                                <input type="checkbox" class="switch-input" id="switch-input" checked>
                                <span class="switch-span"></span>
                            </div>
                        </div>
                    </div>
                `,
                "Save",
                "Cancel",
                false,
                "",
                "green",
                () => {},
                true);
editModal.createModal();
editModal.modalSettings.customClass.popup += ' modal-medium'
editModal.addListener('.btn-edit');

document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', () => {

        const selectorAddress = new Selector(document.getElementById('selector-address'), [
            {name: 'Linnégatan, 114 47 Stockholm, Suecia', value: 'address1', selected: true, optionEl: {}},
            {name: 'Linnégatan, 120 43 Stockholm, Suecia', value: 'address2', selected: false, optionEl: {}},
            {name: 'Linnégatan, 99 76 Stockholm, Suecia', value: 'address3', selected: false, optionEl: {}},
            {name: 'Linnégatan, 245 82 Stockholm, Suecia', value: 'address4', selected: false, optionEl: {}}
        ], false);
        
        selectorAddress.renderSelector();
    })
})

const removeModal = new Modal("Remove place?",
                            "Are you sure you want to remove this place from the organization?",
                            "",
                            "Remove",
                            "Back",
                            false,
                            "",
                            "red");
removeModal.createModal();
removeModal.addListener('.btn-remove');