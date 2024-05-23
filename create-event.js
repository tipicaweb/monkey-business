const saveBtn = document.querySelector('#save-btn');

saveBtn.addEventListener('click', event => {
    event.preventDefault();

    Swal.fire({
        iconHtml: `<div class="bg-primary_green bg-opacity-15 p-8 my-8 rounded-[50px]">
                        <span class="flex w-20 h-20 bg-primary_green icon-task"></span>
                    </div>`,
        confirmButtonText: 'Continue',
        showCancelButton: false,
        title: 'Event created!',
        text: 'The event was created successfully.',
        background: '#181A19',
        backdrop: '#FFFFFF1a',
        customClass: {
            icon: '!border-0 !p-8',
            title: '!text-white !text-2xl !font-bold',
            htmlContainer: '!text-white !opacity-85 !text-md !m-0 !p-[21px] !pt-1',
            confirmButton: '!py-2.5 !w-32 !bg-primary_green !text-text_hover !rounded-full !border-none !bg-none !shadow-none',
        },
    })
})

const cancelBtn = document.querySelector('#cancel-btn');

cancelBtn.addEventListener('click', event => {
    event.preventDefault();

    Swal.fire({
        iconHtml: `<div class="bg-primary_red bg-opacity-15 p-8 my-8 rounded-[50px]">
                        <span class="flex w-20 h-20 bg-primary_red icon-close"></span>
                    </div>`,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Try again',
        showCancelButton: true,
        reverseButtons: true,
        title: 'An error ocurred!',
        text: 'This event was not created. Please try again.',
        background: '#181A19',
        backdrop: '#FFFFFF1a',
        customClass: {
            icon: '!border-0 !p-8',
            title: '!text-white !text-2xl !font-bold',
            htmlContainer: '!text-white !opacity-85 !text-md !m-0 !p-[21px] !pt-1',
            confirmButton: '!py-2.5 !w-32 !bg-primary_green !text-text_hover !rounded-full !border-none !bg-none !shadow-none',
            cancelButton: '!appearance-none !text-primary_green !bg-transparent !py-2.5 !w-32 !rounded-full'
        },
    })
})