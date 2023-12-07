// let main = document.querySelector('.main')

// let firstNum = Number(parseFloat(prompt("Напишіть будь-яке число")))
// let secNum = Number(parseFloat(prompt("Напишіть ще одне будь-яке число")))
// if (firstNum + secNum >= 10 && firstNum + secNum <= 17) {
//     main.style.backgroundColor = "green"
// }
// else {
//     main.style.backgroundColor = "red"
// }
// let logIn = document.querySelector(".form__log")
// let pass = document.querySelector(".form__pass")

// logIn.addEventListener("input", () => {
//     if (logIn.value.length > 3) {
//         logIn.style.boxShadow = "0 0 20px green"
//     }
//     else {
//         logIn.style.boxShadow = "0 0 20px red"
//     }
// })

// let firstNum = Number(parseFloat(prompt("Напишіть будь-яке число")))
// let secNum = Number(parseFloat(prompt("Напишіть ще одне будь-яке число")))
// if (firstNum > secNum) {
//     document.body.style.backgroundColor = "green"
// }
// else {
//     alert('Ви брешете')
// }
// let max = 10
// let min = 1
// let randColor = parseInt(Math.random() * (max+min-1)+min)
// console.log(randColor)

// setInterval(function(){ 
//     let bgColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16)
//     document.querySelector('.bg').style.backgroundColor = bgColor
// }, 1000)

// let bgMain = '#' + (Math.random()*0xFFFFFF<<0).toString(16)
// bgMain
// let picture = document.querySelector('.image')
// picture.src = "ctrl.png"

// let text = document.querySelector('.input_hw')
// let butt = document.querySelector('.form__button')
// let textValue = text.value
// butt.textContent = textValue

// let element = document.querySelector('.first')
// element.textContent = 'ааааааа'

// let virus = document.querySelector('.virus')
// virus.href = 'https://www.pnp.ru/upload/entities/2021/03/23/17/article/detailPicture/a3/c9/d5/b2/92e757aba1efc521b495cb26eec18ac3.jpg'

// picture.alt = 'Вчи программування'
let textArea = document.querySelector('.input__username')
let username = document.querySelector('.card__username')
textArea.addEventListener('input', function(){
    let newText = textArea.value
    username.innerText = newText
})
username.innerText = textArea.value

let inputSurname = document.querySelector('.input__surname')
let surname = document.querySelector('.card__surname')
inputSurname.addEventListener('input', function(){
    let newSurname = inputSurname.value
    surname.innerText = newSurname
})
surname.innerText = inputSurname.value

let num = document.querySelector('.card__number')
let button = document.querySelector('.gen__number')

button.addEventListener("click", function() {
    let newNumber = ""

    for (let i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random()*10)
        newNumber += randomNumber

        if (i % 4 === 3 && i !== 15) {
            newNumber += ' ';
        }
    }

    num.textContent = newNumber

});

let cardCvc = document.querySelector(".card__cv")
let cvButton = document.querySelector(".gen__cv")
let max = 9
let min = 0

cvButton.addEventListener("click", function() {
    let randNumber1 = parseInt(Math.random() * (max+min-1)+min) + ""
    let randNumber2 = parseInt(Math.random() * (max+min-1)+min) + ""
    let randNumber3 = parseInt(Math.random() * (max+min-1)+min) + ""
    randCvc = randNumber1 + randNumber2 + randNumber3
    cardCvc.textContent = randCvc
})

// let card = document.querySelector('.data')
// let darkButton = document.querySelector('.darkButton')

// function changeBgWhite() {
//     document.card.style.backgroundColor = "#ffffff"
// }

// Як зробити кнопку зміни бг

let cardDate = document.querySelector(".card__date")
let inputDate = document.querySelector(".input__date")

inputDate.addEventListener("change", function() {
    let inputDateValue = inputDate.value
    let inputNewDate = inputDateValue.split("-")
    
    if(inputNewDate.length === 3) {
        let year = inputNewDate[0]
        let month = inputNewDate[1]
        let day = inputNewDate[2]
        cardDate.innerHTML = month + "/" + year
    }
})


let textAbout = document.querySelector(".text__about")
let checkModal = document.querySelector('.check__modal')

textAbout.addEventListener("click", function(){
    if(checkModal.className === 'check__modal') {
        checkModal.classList.add('active')
    }
    else {
        checkModal.classList.remove('active')
    }
})


let block = document.querySelector('.block')
let theme = document.querySelector('.change__theme')
let back = document.querySelector('.back')


back.addEventListener("click", function(){   
    if(block.className === 'block') {
        block.classList.add('active')
        theme.classList.add('active')
        back.classList.add('active')
        line.classList.add('active')
    }
    else {
        block.classList.remove('active')
        theme.classList.remove('active')
        back.classList.remove('active')
        line.classList.remove('active')
    }
})

let container = document.querySelector('.block__content')
let thing = document.querySelector('.block__thing')
let blockText = document.querySelector('.block__text')
let textBlock = document.querySelector('.text__block')
let line = document.querySelector('.line')

block.addEventListener("click", function(){
    if (block.className === 'block') {
        block.classList.add('turn')
        container.classList.add('turn')
        line.classList.add('turn')
        cardCvc.classList.add('turn')
    }
    else {
        block.classList.remove('turn')
        container.classList.remove('turn')
        line.classList.remove('turn')
        cardCvc.classList.remove('turn')
    }
})

function allowLettersOnly(event) {
    // Отримати значення введеного тексту
    let inputValue = event.target.value;

    // Замінити всі символи, які не є буквами, на порожній рядок
    let lettersOnly = inputValue.replace(/[^a-zA-Z]/g, '');

    // Оновити значення поля вводу
    event.target.value = lettersOnly;
}

let logo = document.querySelector(".text")
let headerAbout = document.querySelector('.header__about')

logo.addEventListener("click", function(){
    if(headerAbout.className === 'header__about') {
        headerAbout.classList.add('active')
    }
    else {
        headerAbout.classList.remove('active')
    }
})

let urlParams = new URLSearchParams(window.location.search)
let logUsername = urlParams.get('username')

username.innerHTML = logUsername