let resetPassEl = document.getElementById('reset-password');

resetPassEl.addEventListener('click', (event) => {
    event.preventDefault();


    document.getElementById('login-start-tab').classList.add('hidden');
    document.getElementById('reset-password-tab').classList.remove('hidden');
})

let sendPassEl = document.getElementById('send-password');

sendPassEl.addEventListener('click', (event) => {
    event.preventDefault();

    document.getElementById('reset-password-tab').classList.add('hidden');
    document.getElementById('confirm-password-tab').classList.remove('hidden');
})

let changePassEl = document.getElementById('change-password');

changePassEl.addEventListener('click', (event) => {
    event.preventDefault();

    document.getElementById('confirm-password-tab').classList.add('hidden');
    document.getElementById('change-password-tab').classList.remove('hidden');
})

let backLoginEl = document.getElementById('back-login');

backLoginEl.addEventListener('click', (event) => {
    event.preventDefault();

    document.getElementById('change-password-tab').classList.add('hidden');
    document.getElementById('login-start-tab').classList.remove('hidden');
})