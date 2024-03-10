let btnsList = document.querySelectorAll('.tab-button');
let tabsList = document.querySelectorAll('.login-tab');

btnsList.forEach(btn => {
    btn.addEventListener('click', setBtn)
})

function setBtn(event) {
    setTab(event.target.ariaValueText);
}

function setTab(targetId) {
    tabsList.forEach(tab => tab.classList.add('hidden'));

    document.querySelector(`#${targetId}`).classList.remove('hidden');
}

let formLogin = document.getElementById('login-form');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    window.location.pathname = '/';
})

let passwordForm = document.getElementById('password-form');

passwordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    setTab('change_password-tab');
})

let passwordBtns = document.querySelectorAll('.input-icon.view-icon');

passwordBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
    
        event.target.classList.toggle('active');

        if(event.target.classList.contains('active')) event.target.nextElementSibling.type = "text";
        else event.target.nextElementSibling.type = "password";
    })
})