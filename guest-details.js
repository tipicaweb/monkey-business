import Modal from './modals.js';

const productsModal = new Modal("Manage products",
                            "",
                            `
                                <div class="flex flex-col gap-8">
                                    <h4 class="modal-htmlContainer">Assign products for this user.</h4>
                                    <div class="table-component">
                                        <div class="labels-table">
                                            <div class="w-16"></div>
                                            <div>Name</div>
                                            <div>Quantity</div>
                                            <div>Price</div>
                                            <div>Total</div>
                                            <div class="w-28"></div>
                                        </div>
                                        <div class="table-body">
                                            <div class="table-row">
                                                <div>
                                                    <img src="./assets/event_img.svg" class="w-10 rounded-xl" alt="Event logo">
                                                </div>
                                                <div>Lorem ipsum</div>
                                                <div>52</div>
                                                <div>52 sek</div>
                                                <div>1000 sek</div>
                                                <div>
                                                    <button class="assign-btn active">Assigned</button>
                                                </div>
                                            </div>
                                            <div class="table-row">
                                                <div>
                                                    <img src="./assets/event_img.svg" class="w-10 rounded-xl" alt="Event logo">
                                                </div>
                                                <div>Lorem ipsum</div>
                                                <div>52</div>
                                                <div>52 sek</div>
                                                <div>1000 sek</div>
                                                <div>
                                                    <button class="assign-btn active">Assigned</button>
                                                </div>
                                            </div>
                                            <div class="table-row">
                                                <div>
                                                    <img src="./assets/event_img.svg" class="w-10 rounded-xl" alt="Event logo">
                                                </div>
                                                <div>Lorem ipsum</div>
                                                <div>52</div>
                                                <div>52 sek</div>
                                                <div>1000 sek</div>
                                                <div>
                                                    <button class="assign-btn">Assign</button>
                                                </div>
                                            </div>
                                            <div class="table-row">
                                                <div>
                                                    <img src="./assets/event_img.svg" class="w-10 rounded-xl" alt="Event logo">
                                                </div>
                                                <div>Lorem ipsum</div>
                                                <div>40</div>
                                                <div>52 sek</div>
                                                <div>1000 sek</div>
                                                <div>
                                                    <button class="assign-btn">Assign</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `,
                            "Save",
                            "",
                            false,
                            "",
                            "green",
                            () => {},
                            true);

productsModal.createModal();
productsModal.modalSettings.customClass.popup += ' modal-large'
productsModal.addListener('#products-modal', '.assign-btn', "Assigned", "Assign");

const aboutModal = new Modal("Edit guest",
                            "",
                            `
                                <div class="flex flex-col gap-6">
                                    <div class="flex gap-6">
                                        <div class="input-container w-1/2">
                                            <input id="guest_name" class="component-input" type="text" placeholder=" " value="[User name]" required>
                                            <label for="guest_name" class="component-label">Name*</label>
                                            <span class="input-error">*Required</span>
                                            <span class="icon-error error-icon"></span>
                                        </div>
                                        <div class="input-container w-1/2">
                                            <input id="guest_name" class="component-input" type="text" placeholder=" " value="lorem@gmail.com" required>
                                            <label for="guest_name" class="component-label">Email*</label>
                                            <span class="input-error">*Required</span>
                                            <span class="icon-error error-icon"></span>
                                        </div>
                                    </div>
                                    <div class="flex gap-6">
                                        <div class="input-container w-1/2">
                                            <input id="guest_name" class="component-input" type="text" placeholder=" " value="(000) 000-0000" required>
                                            <label for="guest_name" class="component-label">Phone*</label>
                                            <span class="input-error">*Required</span>
                                            <span class="icon-error error-icon"></span>
                                        </div>
                                        <div class="input-container select-container w-1/2">
                                            <select id="guest_select" class="component-input">
                                                <option value="market" selected>Market</option>
                                            </select>
                                            <label for="guest_select" class="component-label">Lorem</label>
                                            <div class="input-icon">
                                                <span class="base-icon icon-arrowD"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-6">
                                        <div class="flex gap-6 w-1/2">
                                            <div class="input-container w-1/2">
                                                <input id="guest_name" class="component-input" type="text" placeholder=" " value="34 years" required>
                                                <label for="guest_name" class="component-label">Age*</label>
                                                <span class="input-error">*Required</span>
                                                <span class="icon-error error-icon"></span>
                                                <div class="input-icon">
                                                    <span class="icon-arrowD base-icon rotate-180"></span>
                                                    <span class="icon-arrowD base-icon"></span>
                                                </div>
                                            </div>
                                            <div class="input-container select-container w-1/2">
                                                <select id="guest_gender" class="component-input">
                                                    <option value="market" selected>Man</option>
                                                    <option value="market">Woman</option>
                                                </select>
                                                <label for="guest_select" class="component-label">Gender</label>
                                                <div class="input-icon">
                                                    <span class="base-icon icon-arrowD"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-container w-1/2">
                                            <input id="guest_name" class="component-input" type="text" placeholder=" " value="Lorem" required>
                                            <label for="guest_name" class="component-label">Hometown*</label>
                                            <span class="input-error">*Required</span>
                                            <span class="icon-error error-icon"></span>
                                        </div>
                                    </div>

                                    <div class="flex gap-12 items-center">
                                        <div class="flex flex-col gap-2">
                                            <div class="flex items-center gap-2 text-sm text-primary_orange font-medium">
                                                <span class="base-icon icon-avaible bg-primary_orange"></span>
                                                Customer since
                                            </div>
                                            <h5 class="pl-8 text-base font-normal">2020-04-04</h5>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <div class="flex items-center gap-2 text-sm text-primary_orange font-medium">
                                                <span class="base-icon icon-past bg-primary_orange"></span>
                                                Last purchase
                                            </div>
                                            <h5 class="pl-8 text-base font-normal">2020-04-04</h5>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <div class="flex items-center gap-2 text-sm text-primary_orange font-medium">
                                                <span class="base-icon icon-payments bg-primary_orange"></span>
                                                Totally spent
                                            </div>
                                            <h5 class="pl-8 text-base font-normal">12.000 sek</h5>
                                        </div>
                                    </div>
                                </div>
                            `,
                            "Save",
                            "",
                            false,
                            "",
                            "green",
                            () => {},
                            true);

aboutModal.createModal();
aboutModal.modalSettings.customClass.popup += ' modal-large'
aboutModal.addListener('#about-modal');

const guestsModal = new Modal("Manage guest lists",
                                "",
                                `
                                    <div class="flex flex-col gap-8">
                                        <h4 class="modal-htmlContainer">Manage guest lists for this user.</h4>
                                        <div class="table-component">
                                            <div class="labels-table">
                                                <div class="w-16"></div>
                                                <div>Name</div>
                                                <div>Quantity</div>
                                                <div>Price</div>
                                                <div>Total</div>
                                                <div class="w-28"></div>
                                            </div>
                                            <div class="table-body">
                                                <div class="table-row">
                                                    <div>
                                                        <img src="./assets/event_img.svg" class="w-10 rounded-xl" alt="Event logo">
                                                    </div>
                                                    <div>Lorem ipsum</div>
                                                    <div>52</div>
                                                    <div>52 sek</div>
                                                    <div>1000 sek</div>
                                                    <div>
                                                        <button class="remove-btn active">Remove</button>
                                                    </div>
                                                </div>
                                                <div class="table-row">
                                                    <div>
                                                        <img src="./assets/event_img.svg" class="w-10 rounded-xl" alt="Event logo">
                                                    </div>
                                                    <div>Lorem ipsum</div>
                                                    <div>52</div>
                                                    <div>52 sek</div>
                                                    <div>1000 sek</div>
                                                    <div>
                                                        <button class="remove-btn">Restore</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `,
                                "Save",
                                "",
                                false,
                                "",
                                "green",
                                () => {},
                                true);

guestsModal.createModal();
guestsModal.modalSettings.customClass.popup += ' modal-large'
guestsModal.addListener('#guests-modal', '.remove-btn', "Remove", "Restore");

const groupsModal = new Modal("Manage groups",
                            "",
                            `
                                <div class="flex flex-col gap-8">
                                    <h4 class="modal-htmlContainer">Manage the groups assigned to this user.</h4>
                                    <div class="table-component">
                                        <div class="labels-table">
                                            <div>Name</div>
                                            <div>Hits</div>
                                            <div>Last run</div>
                                            <div class="w-28"></div>
                                        </div>
                                        <div class="table-body">
                                            <div class="table-row">
                                                <div>Lorem ipsum</div>
                                                <div>540</div>
                                                <div>5/5/2024</div>
                                                <div>
                                                    <button class="remove-btn active">Remove</button>
                                                </div>
                                            </div>
                                            <div class="table-row">
                                                <div>Lorem ipsum</div>
                                                <div>540</div>
                                                <div>5/5/2024</div>
                                                <div>
                                                    <button class="remove-btn">Restore</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `,
                            "Save",
                            "",
                            false,
                            "",
                            "green",
                            () => {},
                            true);

groupsModal.createModal();
groupsModal.modalSettings.customClass.popup += ' modal-large'
groupsModal.addListener('#groups-modal', '.remove-btn', "Remove", "Restore");

const tagsModal = new Modal("Manage tags",
                            "",
                            `
                                <div class="flex flex-col gap-8">
                                    <h4 class="modal-htmlContainer">Manage the tags assigned to this user.</h4>
                                    <div class="flex gap-4 items-center">
                                        <div class="input-container">
                                            <input placeholder=" " id="add_tag" class="component-input" value="[Text]" type="text">
                                            <label for="add_tag" class="component-label">Add tag</label>
                                        </div>
                                        <button class="btn-secondary h-10 min-w-20">Add</button>
                                    </div>
                                    <div class="flex flex-col gap-4">
                                        <h3 class="font-bold text-2xl">Tags Added</h3>
                                        <div class="filters-list">
                                            <button class="segmentation-filter">Lorem ipsum <span class="filter-icon icon-close"></span></button>
                                            <button class="segmentation-filter">Lorem <span class="filter-icon icon-close"></span></button>
                                            <button class="segmentation-filter">Lorem ipsum <span class="filter-icon icon-close"></span></button>
                                            <button class="segmentation-filter">Lorem <span class="filter-icon icon-close"></span></button>
                                            <button class="segmentation-filter">Lorem ipsum <span class="filter-icon icon-close"></span></button>
                                            <button class="segmentation-filter">Lorem <span class="filter-icon icon-close"></span></button>
                                        </div>
                                    </div>
                                </div>
                            `,
                            "Save",
                            "",
                            false,
                            "",
                            "green",
                            () => {},
                            true);

tagsModal.createModal();
tagsModal.modalSettings.customClass.popup += ' modal-large'
tagsModal.addListener('#tags-modal');