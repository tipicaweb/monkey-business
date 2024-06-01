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
        backdrop: '#ffffff16',
        customClass: {
            container: '!backdrop-blur-sm',
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
        iconHtml: `<div class="modal-success_container">
                        <span class="modal-success_icon"></span>
                    </div>`,
        confirmButtonText: 'Continue',
        showCancelButton: false,
        title: 'Segmentation edited!',
        text: 'Your segmentation was edited successfully.',
        background: '#181A19',
        backdrop: '#ffffff16',
        customClass: {
            container: '!backdrop-blur-sm',
            icon: '!border-0 !p-8',
            popup: '!rounded-3xl !p-10',
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

class Selector {
    constructor (containerEl = {}, options = [{name: '', value: '', selected: false, optionEl: {}}]) {
        this.containerEl =  containerEl;
        this.options = options;
        this.optionsEl = {};
        this.inputEl = this.containerEl.querySelector('.component-input');
    }

    renderSelector() {
        const optionsEl = document.createElement('div');
        this.optionsEl = optionsEl;

        optionsEl.classList.add('options');

        this.containerEl.append(optionsEl);

        this.renderOptions();
    }

    renderOptions() {
        this.optionsEl.innerHTML = "";

        this.options.forEach(option => {
            const optionEl = document.createElement('div');

            optionEl.classList.add('option');

            if(option.selected) optionEl.classList.add('active');
            optionEl.innerHTML = `
                <div class="device-check">
                    <span class="check-icon"></span>
                </div>
                ${option.name}
            `;
            optionEl.id = option.value;

            this.optionsEl.append(optionEl);
            option.optionEl = optionEl;
        })

        this.addEvents();
    }

    addEvents() {
        this.optionsEl.addEventListener('click', event => {
            this.optionsEl.classList.add('open');
        })

        this.options.forEach(option => {
            option.optionEl.addEventListener('click', (event) => {
                event.preventDefault();

                option.selected = !option.selected;

                option.optionEl.classList.toggle('active');
            })
        })

        document.addEventListener('click', event => {
            let children = [
                ...this.optionsEl.childNodes
            ];

            if(children.some(child => event.target.id === child.id)) return this.optionsEl.classList.add('open');
            
            if(event.target !== this.optionsEl 
            && event.target !== this.containerEl.querySelector('.input-container')
            && event.target !== this.inputEl) this.optionsEl.classList.remove('open')

        })

        this.containerEl.querySelector('.input-container').addEventListener('click', event => {
            this.optionsEl.classList.add('open');
        })

        this.inputEl.addEventListener('input', event => {
            this.renderSearchOptions(event.target.value.toLowerCase());
        })
    }

    renderSearchOptions(search) {
        this.options.forEach(option => {
            option.optionEl.classList.remove('hidden');

            if(!option.name.trim().toLocaleLowerCase().includes(search)) return option.optionEl.classList.add('hidden');
        })
    }

    getSelectedOptions() {
        return this.options.filter(option => option.selected === true);
    }
}

const selectorCity = new Selector(document.getElementById('selector-city'), [
    {name: 'Hagfors', value: 'hagfors', selected: false, optionEl: {}},
    {name: 'Halmstad', value: 'halmstad', selected: false, optionEl: {}},
    {name: 'Haparanda', value: 'haparanda', selected: true, optionEl: {}}
]);

selectorCity.renderSelector();

const selectorMunicipality = new Selector(document.getElementById('selector-municipality'), [
    {name: 'Municipality 1', value: 'municipality1', selected: false, optionEl: {}},
    {name: 'Municipality 2', value: 'municipality2', selected: false, optionEl: {}},
    {name: 'Municipality 3', value: 'municipality3', selected: true, optionEl: {}},
    {name: 'Municipality 4', value: 'municipality4', selected: false, optionEl: {}},
    {name: 'Municipality 5', value: 'municipality5', selected: false, optionEl: {}},
    {name: 'Municipality 6', value: 'municipality6', selected: true, optionEl: {}}
]);

selectorMunicipality.renderSelector();

const selectorProduct = new Selector(document.getElementById('selector-product'), [
    {name: 'Product 1', value: 'product1', selected: false, optionEl: {}},
    {name: 'Product 2', value: 'product2', selected: false, optionEl: {}},
    {name: 'Product 3', value: 'product3', selected: true, optionEl: {}}
]);

selectorProduct.renderSelector();

const btnsGender = document.querySelectorAll('.btn-gender');

btnsGender.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.classList.toggle('active');
    })
})