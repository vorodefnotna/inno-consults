'use strict';

const form = document.querySelector('.form');
const button = document.querySelector('.button');
const email = document.querySelector('.email');
const emailError = document.querySelector('.email + div.error');
const passwordInput = document.querySelector('.password');
const passwordError = document.querySelector('.password + div.error');
const checkbox = document.querySelector('.checkbox');
const checkboxError = document.querySelector('.checkbox-error')
const fields = document.querySelectorAll('.data-field')

const DATA_FIELDS = {
    email: fields[0],
    password: fields[1],
    checkbox: fields[2]
}

const validateEmail = () => {
    const value = email.value
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!value.length){
        showError('email', 'Поле обязательно для заполнения')
        return false
    }
    if(!re.test(value.toLowerCase())){
        showError('email', 'Email невалидный')
        return false
    }
    return true
}

const passwordValidate = () => {
    const password = passwordInput.value;
    if(!password.length){
        showError('password', 'Поле обязательно для заполнения')
        return false
    }
    if(password.length < 8){
        showError('password', 'Пароль должен содержать как минимум 8 символов')
        return  false
    }
    return true
}

const checkboxValidate = () => {
    if(!checkbox.checked){
        showError('checkbox', 'Поле обязательно для заполнения')
        return false
    }
    return true
}

const showError = (type, text, reset = false) => {
    debugger
    type && !reset && DATA_FIELDS[type].classList.toggle('data-field__error')
    if(type === 'email'){
        emailError.innerText = text
    } else if(type === 'password'){
        passwordError.innerText = text
    } else if(type === 'checkbox'){
        checkboxError.innerText = text
    }
}

const resetError = () => {
    fields.forEach(item => {
        item.classList.remove('data-field__error')
    })
    Object.keys(DATA_FIELDS).forEach(type => {
        showError(type, '', true)
    })
}

const submitHandler = (e) => {
    e.preventDefault()
    const emailValid = validateEmail();
    const passwordValid = passwordValidate();
    const checkboxValid = checkboxValidate();

    if(emailValid && passwordValid && checkboxValid) {
        resetError()
        const formData = {
            email: form.elements[0].value,
            password: form.elements[1].value
        }
        console.log(formData)
    }
}

form.addEventListener('submit', submitHandler)


//
//     email.addEventListener('input', function (event) {
//         if (email.validity.valid) {
//             emailError.textContent = '';
//             emailError.className = 'error';
//         } else {
//             showErrorEmail();
//         }
//     });
//
//     document.addEventListener('submit', function (event) {
//         if (!email.validity.valid) {
//             showErrorEmail();
//             event.preventDefault();
//         }
//     });
//
//     function showErrorEmail() {
//         if (email.validity.valueMissing) {
//             emailError.textContent = 'Поле обязательно для заполнения';
//             email.style.borderColor = 'red';
//
//         } else if (function validateEmail(email) {
//             const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return re.test(String(email).toLowerCase());
//         }
//         ) {
//             emailError.textContent = 'Email невалидный';
//             email.style.borderColor = 'red';
//         }
//     }
//
// password.addEventListener('input', function (event) {
//     if (password.validity.valid) {
//         passwordError.textContent = '';
//         passwordError.className = 'error';
//         validatePassword();
//     } else {
//         showErrorPassword();
//     }
// });
//
// document.addEventListener('submit', function (event) {
//     if (!password.validity.valid) {
//         showErrorPassword();
//         event.preventDefault();
//     }
// });
//
// function showErrorPassword() {
//     if (password.validity.valueMissing) {
//         passwordError.textContent = 'Поле обязательно для заполнения';
//         password.style.borderColor = 'red';
//
//     } else if (function validatePassword(password) {
//         if (password.length < 8) {
//             alert('too long');
//             passwordError.textContent = 'Пароль должен содержать как минимум 8 символов';
//             password.style.borderColor = 'red';
//             return false;
//         } else
//
//             return true;
//     });
// }







