const distributionChart = createColumn(['0-17', '18-24', '25-34', '35-49', '50-64', '+65'], [
    {
        name: "Men",
        data: [45, 25, 35, 40, 30, 15]
    },
    {   
        name: "Women",
        data: [30, 48, 40, 27, 40, 30]
    }
], ["#E86987", "#FFA65E"], "distribution-chart", '60%');

let cancelBtn = document.getElementById('btn-cancel');

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();

    Swal.fire({
        title: 'Cancel segmentation?',
        cancelButtonText: 'Back',
        confirmButtonText: 'Cancel',
        showCancelButton: true,
        reverseButtons: true,
        text: 'Are you sure you want to cancel this segmentation?',
        background: '#181A19',
        backdrop: '#262928',
        customClass: {
            title: '!text-left !text-white !text-2xl !font-bold',
            htmlContainer: '!text-white !opacity-85 !text-md !m-0 !p-[21px] !text-left',
            confirmButton: '!py-2.5 !w-32 !bg-primary_red !text-text_hover !rounded-full !border-none !bg-none !shadow-none',
            cancelButton: '!appearance-none !text-primary_green !bg-transparent !py-2.5 !w-32 !rounded-full'
        },
    })
})

let confirmBtn = document.getElementById('btn-confirm');

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();

    Swal.fire({
        iconHtml: `<div class="bg-primary_green bg-opacity-15 p-8 my-8 rounded-[50px]">
                        <span class="flex w-20 h-20 bg-primary_green icon-task"></span>
                    </div>`,
        confirmButtonText: 'Continue',
        showCancelButton: false,
        title: 'Segmentation created!',
        text: 'Your segmentation was created successfully.',
        background: '#181A19',
        backdrop: '#262928',
        customClass: {
            icon: '!border-0 !p-8',
            title: '!text-white !text-2xl !font-bold',
            htmlContainer: '!text-white !opacity-85 !text-md !m-0 !p-[21px] !pt-1',
            confirmButton: '!py-2.5 !w-32 !bg-primary_green !text-text_hover !rounded-full !border-none !bg-none !shadow-none',
        },
    })
})

let entriesFound = document.getElementById('entries-found');
let showEntries = document.getElementById('show-entries');

let entriesList = document.getElementById('entries-list');

showEntries.addEventListener('click', (e) => {
    e.preventDefault();

    entriesFound.classList.add('hidden');

    entriesList.classList.remove('hidden');
})