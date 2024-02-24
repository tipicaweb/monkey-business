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