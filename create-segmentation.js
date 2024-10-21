import Modal from './modals.js';
import Selector from './selectors.js';

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


const cancelModal = new Modal("Cancel segmentation?",
                              "Are you sure you want to cancel this segmentation?",
                              "",
                              "Cancel",
                              "Back",
                              false,
                              "",
                              "red",
                              navigateToSegmentation);
cancelModal.createModal();
cancelModal.addListener('#btn-cancel');

const createModal = new Modal("Segmentation created!",
                               "Your segmentation was created successfully.",
                               "",
                               "Continue",
                               "Cancel",
                               true,
                               "success",
                               "green",
                               navigateToSegmentation);
createModal.createModal();
createModal.addListener('#btn-confirm');

function navigateToSegmentation(result) {
    if(result.isConfirmed) window.location = 'segmentation.html'
}

let entriesFound = document.getElementById('entries-found');
let showEntries = document.getElementById('show-entries');

let entriesList = document.getElementById('entries-list');

showEntries.addEventListener('click', (e) => {
    e.preventDefault();

    entriesFound.classList.add('hidden');

    entriesList.classList.remove('hidden');
})

const selectorCity = new Selector(document.getElementById('selector-city'), [
    {name: 'Hagfors', value: 'hagfors', selected: false, optionEl: {}},
    {name: 'Halmstad', value: 'halmstad', selected: false, optionEl: {}},
    {name: 'Haparanda', value: 'haparanda', selected: true, optionEl: {}}
], true);

selectorCity.renderSelector();

const selectorMunicipality = new Selector(document.getElementById('selector-municipality'), [
    {name: 'Municipality 1', value: 'municipality1', selected: false, optionEl: {}},
    {name: 'Municipality 2', value: 'municipality2', selected: false, optionEl: {}},
    {name: 'Municipality 3', value: 'municipality3', selected: true, optionEl: {}},
    {name: 'Municipality 4', value: 'municipality4', selected: false, optionEl: {}},
    {name: 'Municipality 5', value: 'municipality5', selected: false, optionEl: {}},
    {name: 'Municipality 6', value: 'municipality6', selected: true, optionEl: {}}
], true);

selectorMunicipality.renderSelector();

const selectorProduct = new Selector(document.getElementById('selector-product'), [
    {name: 'Product 1', value: 'product1', selected: false, optionEl: {}},
    {name: 'Product 2', value: 'product2', selected: false, optionEl: {}},
    {name: 'Product 3', value: 'product3', selected: true, optionEl: {}}
], true);

selectorProduct.renderSelector();

const btnsGender = document.querySelectorAll('.btn-gender');

btnsGender.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.classList.toggle('active');

        if(e.target.classList.contains('active'))
            e.target.textContent = `${e.target.value} Added`;
        else
            e.target.textContent = `Add ${e.target.value}`;
    })
})