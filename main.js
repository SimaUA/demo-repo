// 1.Найти все методы которые используются для работы со строками в JS

const a = 'Sima'
const b = ' doing home work'
const c = 123.1234

// lenght Длинна строки
console.log(a.length); // 4

// Преобразует символы в строке в нижний регистр
console.log(a.toLowerCase());

// Преобразует символы в строке в верхний регистр
console.log(a.toUpperCase());

// repeat Принимает в качестве параметра число и повторяет строку указанное количество раз
console.log(a.repeat(3)) //SimaSimaSima

// charAt  Возвращает символ по указанному индексу
console.log(a.charAt(0)) // S

// concat Объединяет две или более строки и возвращает одну строку
console.log(a.concat(b)) // Sima doing home work

// split Разбивает строку в массив по указанному разделителю, которым может быть подстрока или регулярное выражение
//Вторым параметром можно указать ограничитель

// Получаем каждый символ
console.log(a.split('')) // ['S','i','m','a']

// Получаем каждое слово из строки
console.log(b.split(' ')) // [ '', 'doing', 'home', 'work' ]

// Устанавливаем ограничитель
console.log(b.split(' ', 3)) // [ '', 'doing', 'home' ]

// includes Проверяет, содержит ли строка указанную подстроку
// Вторым параметром можно указать позицию в строке, с которой следует начать поиск

console.log(a.includes('sima')) //false

console.log(b.includes('doing', 1)) //true

// indexOf Возвращает индекс первого найденного вхождения указанного значения
// Поиск ведётся от начала до конца строки. Если совпадений нет, возвращает -1
// Вторым параметром можно передать позицию, с которой следует начать поиск

console.log(a.indexOf('a')) // 3

console.log(a.indexOf('S', 2)) // -1

console.log(b.indexOf('h', 4)) // 7

// lastIndexOf Возвращает индекс последнего найденного вхождения указанного значения
// Поиск ведётся от конца к началу строки. Если совпадений нет, возвращает -1
// Вторым параметром можно передать позицию, с которой следует начать поиск

console.log(b.lastIndexOf('o')) // 13

// endsWith Проверяет, заканчивается ли строка символами, заданными первым параметром
// Возвращает true или false

console.log(b.endsWith('work')) // true

// startsWith Проверяет, начинается ли строка с указанных символов
// Возвращает true или false

console.log(b.startsWith(' doing')) // true

// search Проверяет, есть ли в строке указанное значение или регулярное выражение и возвращает индекс начала совпадения

console.log(b.search('home')) // 7

// slice  Извлекает часть строки и возвращает новую строку. Обязательный параметр — начало извлечения
// Вторым параметром можно установить границу (по умолчанию — до конца строки)

console.log(b.slice(1, 6)) // doing

// Отрицательные значения тоже работают
console.log(b.slice(-4)) // work

// substring Извлекает символы из строки между двумя указанными индексами

console.log(b.substring(1, 11)) //doing home

// substr Извлекает часть строки указанной длины. Первым параметром принимает стартовую позицию, вторым — длину

console.log(b.substr(1, 5)) // doing

// replace Ищет в строке указанное значение или регулярное выражение и возвращает новую строку,
// в которой выполнена замена на второй параметр
// replaceAll Заменяет все найденные совпадения другой строкой или переданной функцией

console.log(b.replace('home', a)) // doing Sima work

// padEnd Добавляет в конце отступы, пока строка не достигнет длины, заданной первым параметром
// Вторым параметром можно указать другой символ вместо пробела

console.log(b.padEnd(25, 'k')) // doing home workkkkkkkkkk

// padStart Добавляет в начале отступы, пока строка не достигнет длины, заданной первым параметром
// Вторым параметром можно указать другой символ вместо пробела

console.log(b.padStart(20, 'sima')) // sima doing home work

// trim Обрезает пробелы с обоих концов строки. 
// trimEnd Обрезает пробелы в конце строки
// trimStart Обрезает пробелы в начале строки
console.log(b.trim()) // doing home work (обрезало первый пробел)

// charCodeAt Возвращает числовое значение Юникода по указанному индексу

console.log(a.charCodeAt(3)) // 97 (a)

// fromCharCode Преобразует числовые значения Юникода в читаемые символы

/console.log(String.fromCharCode(83, 105, 109, 97)) // Sima



// 2. Найти все методы которые используются для работы с числами в JS

// toString() Возвращает число в виде строки

console.log(c.toString()) // 123.1234

// toFixed() возвращает строку с числом, записанным с указанным количеством десятичных знаков

console.log(c.toFixed(0)) // 123

// toExponential() возвращает строку с округленным числом, записанным с использованием экспоненциальной записи

console.log(c.toExponential(4)) // 1.2312e+2

// toPrecision() возвращает строку с числом, записанным с указанной длиной

console.log(c.toPrecision(9)) // 123.123400

// Number() можно использовать для преобразования переменных JavaScript в числа
// Number() также может преобразовать дату в число

console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(new Date("2022-01-29")) // 2022-01-29T00:00:00.000Z



// ЗАДАНИЕ Есть строка 'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/'
// вытянуть из этой строки домен, вытянуть название статьи, убрать дефис и каждое слово сделать с заглавной буквы

const url = new URL ('https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/')

console.log(url.hostname) // inc4.net Вытянул домен
console.log(url.pathname) // /what-can-cedefi-bring-to-the-crypto-industry/ Вытянул название статьи

let sentence = '/what-can-cedefi-bring-to-the-crypto-industry/'

let newSen = sentence.match(/[^_\W]+/g).join(' ') // заменил все не-слова на пробелы

console.log(
    newSen.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ') // Код скопировал но разобрался 
)

















