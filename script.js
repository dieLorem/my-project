// var a = 12
// var b = 15
// alert(a+b)


// var firstName = 'Aman'
// var lastName = 'Akumov'
// alert(firstName + ' ' + lastName)


// var c = 1  
// var d = '1' 
// alert(c+d)


// var name = prompt('Как тебя зовут?') 

// var isBoss = confirm('Ты Аман?')

// alert('Привет Аман')


// var name = prompt('Type your name...')
// alert('Hello' + ' ' + name)



// var a = 10;
// var b = 2
// alert(a+b)

//var-ключевое слово
// a - переменная
//10


// var name = 'Alena'
// confirm('Вы Алена?')
// var name = prompt('Ваш Возраст?')


//if ...else

// let year = prompt('Какой у нас сейчас год?'); 
// if (year == 2021) alert('Верно!') 



// let user = prompt('Кто вы?') 

// if(user == 'admin') {
//     alert('Добро пожаловать')
// } else {
//     alert('У вас нет доступа')
// }


// let age = prompt('Ваш возраст')

// if(age < 10) {
//     alert('Малыш закрой сайт')
// } else if (age < 20) {
//     alert('Привет студент')
// } else if (age < 50) {
//     alert('Привет старичок')
// } else if (age <= 100) {
//     alert ('Старичок')
// }


// let userName = prompt('Ваш ФИО')
// alert('Добро пожаловать'+ ' ' + userName)


// Типы данных
// 1.число (number) - 123
// 2.BigInt - 12323456789078745687467846n
// 3.Строка(string) - 'Ivan'
// 4.Булевой тип - true, false 
// 5.Null
// 6.Undefined
// 7.Object {...}
// 8.Symbol 


// console.log(typeof('number'))
// console.log(typeof(10))
// console.log(typeof('12')) 


// function myFunction(el, clr) {
//     el.style.color = clr
// }




// console.log(5 + 1)
// console.log('5' + 1) //string

// console.log(typeof(5))
// console.log(typeof('Hello'))
// console.log(typeof(true))
// console.log(typeof(38884445465453544n)) 
// console.log(typeof(null))
// console.log(typeof(undefined))
// console.log(typeof( {} ))


//цикл 
//1.else

// var year = prompt('Current year')
// if(year == 2021) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// var bus = prompt('На каком транспорте вы поедете?')
// if( bus == 'маршрутка'){
//     console.log('отличный выбор')
// } else {
//     console.log('мне вас жаль')
// }


//2.else if
// var teens = prompt('Какой у Вас курс?')
// if(teens <= 10) {
//     console.log('У вас группа по Скретч')
// } else if(teens <= 17) {
//     console.log('У вас группа по WEB')
// } else if (teens <= 20) {
//     console.log('У вас продвинутый уровень')
// } else {
//     console.log('Вы ментор')
// }


// var form = prompt("Какой у вас класс?")
// if(form <= 1) {
//     console.log('у вас подготовительный класс')
// } else if (form <= 4) {
//     console.log('у вас начальный класс')
// } else if (form <= 8) {
//     console.log('у нас средний класс')
// } else {
//     console.log('У вас старший класс')
// }

//sum
// var a = +prompt('Введите первое значение', '4')
// var b = +prompt('Введите второе значение', '3')
// console.log (a + b)


//min
// var a = prompt('Введите первое значение', '4')
// var b = prompt('Введите второе значение', '3')
// console.log (a - b)


//Math.pow()
// var a = prompt('Число')
// var b = prompt('степень')
// console.log(Math.pow(a, b))


// 2+2 = 4
// 2+2 = 22

// console.log( 2 > 0) 
// console.log( 2 < 0)
// console.log( 2 == 0)
// console.log( 2 != 0)  //! - не


// console.log('Я' < 'А') 
// console.log('Ч' > 'Ж') 
// console.log('абрикос' > 'абориген')


// function Add () {
//     console.log ('Hello')
// }
// Add() 
 

// let userName = 'Петя'

// function foo () {
//     let userName = 'Оля'
//     let message = 'Привет' + ' ' + userName
//     console.log(message)
// }
// foo()



// let userName = prompt('Type your name')
// const foo = () => {
//     let message = 'Hello' + ' ' + userName
//     console.log(message)
// }
// foo()


//функция 

// function showMessage() {
//     alert('Hello Aman')
// }

// showMessage()


// let firstName = 'Aman'
// let lastName = 'Akumov'

// function userName() {
//     let user = firstName + ' ' + lastName
//     console.log('Привет' + " " + user)
// }

// userName ()


// let userName = 'Nikita'
// let userAge = 12

// function userData() {
//     console.log("Юноше" + " " + userName + " " + userAge + ' ' + 'лет')
// }

// userData()


// function user(name, age) {
//     console.log(name + ' ' + age)
// }

// user('Aman', 23)
// user('Aruuke', 12)
// user('Kanybek', 14)
// user('Nikita', 26)
// user('Chynara', 22)


//цикл if else
// let age = prompt('Введите год', 2000)

// if(age == 2020) {
//     alert('Говновый год')
// } else {
//     alert('все хорошо')
// }


// let userAge = prompt('Ваш возраст?', 12)

// if(userAge <= 10){
//     console.log('Ты малыш')
// } else if (userAge <= 17) {
//     console.log('Ты тинейджер')
// } else if(userAge <= 25) {
//     console.log('Ты студент')
// } else if (userAge <= 30) {
//     console.log('Ты офисный планктон')
// } else if(userAge <= 50) {
//     console.log('Ты старичок')
// } else if (userAge <= 70){
//     console.log('Ты пенсионер')
// } else {
//     console.log('Ты деда')
// }

let a = prompt('Число', 3)
let b = prompt('Степень', 5)

alert(Math.pow(a, b))

