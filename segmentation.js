let createBtn = document.getElementById('create-segmentation');

createBtn.addEventListener('click', (event) => {
    event.preventDefault();

    Swal.fire({
        title: 'Create segmentation',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Continue',
        showCancelButton: true,
        reverseButtons: true,
        html: `
            <div class="input-container">
                <input placeholder=" " id="segmentation-create" class="component-input" value="[Segmentation name]" type="text">
                <label for="segmentation-create" class="component-label">Segmentation name</label>
            </div>`,
        background: '#181A19',
        backdrop: '#262928',
        customClass: {
            title: '!text-left !text-white !text-2xl !font-bold',
            confirmButton: '!py-2.5 !w-32 !bg-primary_green !text-text_hover !rounded-full !border-none !bg-none !shadow-none',
            cancelButton: '!appearance-none !text-primary_green !bg-transparent !py-2.5 !w-32 !rounded-full'
        },
    })
})