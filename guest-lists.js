import Modal from './modals.js'
import Selector from "./selectors.js";

const createModal = new Modal("Create guest lists",
                              "",
                              `<div class="input-container">
                                    <input placeholder=" " id="lists-create" class="component-input" value="[Guest lists name]" type="text">
                                    <label for="lists-create" class="component-label">Guest lists name</label>
                                </div>`,
                              "Continue",
                              "Cancel",
                              false,
                              "",
                              "green",
                              confirmCreate);
createModal.createModal();
createModal.addListener('#create-lists');

const deleteModal = new Modal("Delete guest lists?",
                              "Are you sure you want to delete this guest lists?",
                              ``,
                              "Delete",
                              "Cancel",
                              false,
                              "",
                              "red");
deleteModal.createModal();
deleteModal.addListener('.delete-lists');

function confirmCreate(result) {
    if(result.isConfirmed) {
        window.location = "create-guest-lists.html";
    }
}

const selectorType = new Selector(document.getElementById('selector-type'), [
    {name: 'Organizer', value: 'organizer', selected: true, optionEl: {}},
    {name: 'Event', value: 'event', selected: true, optionEl: {}},
    {name: 'Lorem', value: 'lorem', selected: true, optionEl: {}},
    {name: 'Lorem', value: 'lorem', selected: true, optionEl: {}},
], true);

selectorType.renderSelector();

const selectorSortby = new Selector(document.getElementById('selector-sortby'), [
    {name: 'A - Z', value: 'a-z', selected: false, optionEl: {}},
    {name: 'Z - A', value: 'z-a', selected: false, optionEl: {}},
    {name: 'Created', value: 'created', selected: true, optionEl: {}},
    {name: 'Updated', value: 'updated', selected: false, optionEl: {}},
    {name: 'Hits asc.', value: 'hitsasc', selected: false, optionEl: {}},
    {name: 'Hits dsc.', value: 'hitsdsc', selected: false, optionEl: {}},
], false);

selectorSortby.renderSelector();