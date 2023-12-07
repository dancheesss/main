let email = document.querySelector('.email');
email.addEventListener('input', function () {
    let emailValue = email.value;
    if(emailValue.length > 5 && emailValue.includes('@gmail.com') && emailValue) {
        email.classList.add('green')
        email.classList.remove('red')
    }
    else if(emailValue.length === 0){
        email.classList.remove('green')
        email.classList.remove('red')
    }

    else{
        email.classList.remove('green')
        email.classList.add('red')
    }
})

let password = document.querySelector('.password');
password.addEventListener('input', function () {
    let passwordValue = password.value;
    if(passwordValue.length > 5) {
        password.classList.add('green')
        password.classList.remove('red')
    }
    else if(passwordValue.length === 0){
        password.classList.remove('green')
        password.classList.remove('red')
    }

    else{
        password.classList.remove('green')
        password.classList.add('red')
    }
})

let phone = document.querySelector('.phone');
phone.addEventListener('input', function () {
    let phoneValue = phone.value;
    if(phoneValue.includes('+') && phoneValue.length === 13) {
        phone.classList.add('green')
        phone.classList.remove('red')
    }
    else if(phoneValue.length === 0){
        phone.classList.remove('green')
        phone.classList.remove('red')
    }

    else{
        phone.classList.remove('green')
        phone.classList.add('red')
    }
})


function allowLettersOnly(event) {
    // Отримати значення введеного тексту
    let inputValue = event.target.value;

    // Замінити всі символи, які не є літерами на кирилиці, на порожній рядок
    let cyrillicLettersOnly = inputValue.replace(/[^а-яА-ЯёЁі І]/g, '');

    // Оновити значення поля вводу
    event.target.value = cyrillicLettersOnly;
}

function allowNumbersOnly(event) {
    // Отримати значення введеного тексту
    let inputValue = event.target.value;

    // Замінити всі символи, які не є цифрами, на порожній рядок
    let digitsOnly = inputValue.replace(/[^0-9+]/g, '');

    // Оновити значення поля вводу
    event.target.value = digitsOnly;
}

let agree = document.querySelector('.form__button')

agree.addEventListener('click', function(e) {
    let emailError = document.querySelector('.emailError')
    let passwordError = document.querySelector('.passwordError')
    let phoneError = document.querySelector('.phoneError')
    let iUsername = document.querySelector('.name')
    let user = document.querySelector('.user')
    let checkError = document.querySelector('.checkError')
    let username = iUsername.value
    let iEmail = email.value
    let iPassword = password.value
    let iPhone = phone.value
    let check = document.querySelector('.checkbox')


    
    if (username.length === 0) {
        user.classList.add('error')
        setTimeout(function () {
            user.classList.remove('error')
        }, 2000)
        return;
    }
    else if (iPassword.length < 8) {
        passwordError.classList.add('active')
        setTimeout(function () {
            passwordError.classList.remove('active')
        }, 2000)
        return;
    }
    else if (iPhone.length !== 13 || !iPhone.includes('+')) {
        phoneError.classList.add('active')
        setTimeout(function () {
            phoneError.classList.remove('active')
        }, 2000)
        return;
    }
    else if(!iEmail.includes('@gmail.com')) {
        emailError.classList.add('active')
        setTimeout(function () {
            emailError.classList.remove('active')
        }, 2000)
        return;
    }
    else if (!check.checked) {
        console.log(check)
        // e.preventDefault()
        checkError.classList.add('active')
        setTimeout(function () {
            checkError.classList.remove('active')
        }, 2000)
        return;
    }   
    else {
        let url = "main.html?username=" + encodeURIComponent(username)
        window.location.href = url
    }
})

