// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// class Form {
//     constructor (formId) {
//         this.formId = formId;

//         this.formEl = document.getElementById(formId);
        
//         this.inputs = this.formEl.querySelectorAll('.component-input');
//         this.errors = [];

//         this.addValidity();

//         this.addClearListener();
//     }

//     addClearListener() {
//         this.inputs.forEach(input => {
//             input.addEventListener('input', (e) => {
//                 this.errors.filter(error => error.id !== input.id);

//                 this.showErrors();
//                 console.log(this.errors);
//             })

//         })
//     }

//     addValidity() {
//         this.formEl.addEventListener('submit', (e) => {
//             e.preventDefault();

//             this.inputs.forEach(input => {

//                 if(!input.required && input.value === '') return;
//                 if(this.errors.some(error => error.id === input.id)) return;

//                 if(input.value === '') {
//                     return this.errors.push({
//                         id: input.id,
//                         msg: '*Required'
//                     })
//                 }

//                 if(input.type === 'email') {
//                     if(!validateEmail(input.value)) {
//                         return this.errors.push({
//                             id: input.id,
//                             msg: 'Enter a valid email'
//                         });
//                     }
//                 }

//                 input.setAttribute('error', 'false');
//                 input.parentElement.querySelector('.input-error').textContent = '';
//             })

//             this.showErrors();
//         });
//     }

//     showErrors() {
//         this.inputs.forEach(input => {
//             input.setAttribute('error', 'false');

//             const errorSpan = input.parentElement.querySelector('.input-error');
//             errorSpan.textContent = '';
//         })

//         this.errors.forEach(error => {
//             const inputEl = document.getElementById(error.id);
//             inputEl.setAttribute('error', 'true');

//             const errorSpan = inputEl.parentElement.querySelector('.input-error');
//             errorSpan.textContent = error.msg;
//         })
//     }
// }

// const form = new Form('myForm');