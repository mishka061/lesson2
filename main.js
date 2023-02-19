
console.log("Добро"+" пожаловать"+" на курс,"+" Алена")
alert('Дата прохождения курса 19.02.2023')

 //var a; // устаревший вариант
 //let b; // современный вариант
 //const myBirthDay = '11.11.1911'; // не изменяемая переменная


// Типы данных
console.log('Типы данных')
console.log("hello world!") // String
console.log(5) // Number (целое)
console.log(5.5) //Number (с плавающей запятой float)
console.log(1/0) // Числовое значение, представляющее бесконечность
console.log("Строка" / 0) // NAN (не число)
console.log(99999999999999999999n) // Bigint ( можно безопасно хранить и обрабатывать большие целые числа даже за пределами максимального безопасного целочисленного значения Number.)
console.log(5 == 5) // BOOLean
console.log(null) //null (отсутствие значения)
console.log(undefined) // undefined не определено

// Оператор typeof
console.log('Оператор typeof')
console.log(typeof "hello world!") // typeof String
console.log(typeof 5) // typeof Number 
console.log(typeof 5.5) // typeof Number 
console.log(typeof 1/0) // typeof NAN
console.log(typeof "Строка" / 0) // typeof NAN 
console.log(typeof 5 == 5) // typeof false
console.log(typeof null) //typeof object
console.log(typeof undefined) //typeof undefined 


//Обращаемся к документу,находим по id, добавляем текст
document.getElementById('one').innerHTML='<h1>Hello world!</h1>'