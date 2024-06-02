class Modal {
    constructor (title = "", subtitle = "", html = ``, confirmBtn = "", cancelBtn = "", hasIcon = false, icon = "", confirmBtnColor = "", callback = function() {}) {
        this.title = title;
        this.subtitle = subtitle;
        this.html = html;
        this.confirmBtn = confirmBtn;
        this.cancelBtn = cancelBtn;
        this.hasIcon = hasIcon;
        this.icon = icon;
        this.confirmBtnColor = confirmBtnColor;
        this.callback = callback;

        this.modalSettings = {};
    }

    createModal() {
        const modalSettings = {
            background: '#181A19',
            backdrop: '#ffffff16',
            reverseButtons: true,
            showCancelButton: false,
            customClass: {
                container: `modal-container ${!this.hasIcon && 'no-icon'}`,
                title: 'modal-title',
                icon: 'modal-icon',
                popup: 'modal-popup',
                htmlContainer: 'modal-htmlContainer',
                cancelButton: 'modal-btn cancel',
                actions: 'modal-actions',
                confirmButton: `modal-btn ${this.confirmBtnColor}`,
            },
        };

        console.log(modalSettings);

        modalSettings.title = this.title;
        modalSettings.text = this.subtitle;
        modalSettings.html = this.html;
        modalSettings.confirmButtonText = this.confirmBtn;

        if(this.cancelBtn) {
            modalSettings.showCancelButton = true;
            modalSettings.cancelButtonText = this.cancelBtn;
        }

        if(this.hasIcon) {
            modalSettings.iconHtml = `<div class="modal-icon_container ${this.icon}">
                                            <span class="container-icon"></span>
                                        </div>`;
        }

        this.modalSettings = modalSettings;
    }

    showModal() {
        Swal.fire(this.modalSettings).then(result => this.callback(result));
    }

    addListener(query) {
        const targetsEl = document.querySelectorAll(query);

        targetsEl.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
    
                this.showModal();
            })
        })
    }
}

const trashModal = new Modal("Delete item?",
                             "Are you sure you want to delete this item?",
                             "",
                             "Delete",
                             "Back",
                             false,
                             "",
                             "red");
trashModal.createModal();
trashModal.addListener('.btn-trash');

export default Modal;