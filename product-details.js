let btnsList = document.querySelectorAll('.details-item');
let tabsList = document.querySelectorAll('.details-tab');

btnsList.forEach(btn => {
    btn.addEventListener('click', setBtn)
})

function setBtn(event) {
    btnsList.forEach(btn => btn.classList.remove('active'));

    event.target.classList.add('active');

    setTab(event.target.ariaValueText);
}

function setTab(targetId) {
    tabsList.forEach(tab => tab.classList.remove('active'));

    document.querySelector(`#${targetId}`).classList.add('active');
}

const switchInput = document.querySelector('#switch-input');

const ageFrom = document.querySelector('#product_ageForm');
const ageTo = document.querySelector('#product_ageTo');

switchInput.addEventListener('click', (e) => {
    if(switchInput.checked) {
        ageFrom.disabled = true;
        ageTo.disabled = true;
    } else {
        ageFrom.disabled = false;
        ageTo.disabled = false;
    }
})