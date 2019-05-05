'use strict';

//1
/* Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
// function checkNumberType(...num) {
//   if (num % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
//   return;
// }

// // Вызовы функции для проверки
// console.log(checkNumberType(2)); // 'Even'

// console.log(checkNumberType(46)); // 'Even'

// console.log(checkNumberType(3)); // 'Odd'

// console.log(checkNumberType(17)); // 'Odd'

//2
/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// function formatString(str) {
//   if (str.length <= 40) {
//     return str;
//   } else {
//     str = str.substr(0, 40) + '...';
//     return str;
//   }
// }

// // Вызовы функции для проверки
// console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')); // вернется форматированная строка

//3
/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
// function checkForSpam(str) {
//   str = str.toLowerCase();
//   if (str.includes('spam') || str.includes('sale')) {
//     return true;
//   }
//   return false;
// }

// Вызовы функции для проверки
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//4
/*Написать функцию, getPx(str)

Функция getPx должна получать строку вида '10px',
проверять была ли передана строка, если да,
возвращать только числовую составляющую, к примеру 10.

Если была передана не строка, функция возвращает null.
*/
// function getPx(str) {
//   if (typeof str === 'string') {
//     return parseFloat(str);
//   } else {
//     return null;
//   }
// }

// // Вызовы функции для проверки
// console.log(getPx('10px') === 10); // true
// console.log(getPx('10.5') === 10.5); // true
// console.log(getPx('0') === 0); // true
// console.log(getPx(-1)); // null
// console.log(getPx(10)); // null

//5
/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/
// function findLongestWord(str) {
//   let strSplit = str.split(' ');
//   let longerWord = strSplit[0];
//   for (let word of strSplit) {
//     if (word.length > longerWord.length) {
//       return (longerWord = word);
//     }
//   }
//   return longerWord;
// }

// // Вызовы функции для проверки
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

//6
// /*
//   Напиши функцию findLargestNumber(numbers),
//   которая получает массив чисел numbers, и возвращает
//   самое большое число в массиве.
// */
// function findLargestNumber(numbers) {
//   let bigNumber = numbers[0];
//   for (let number of numbers) {
//     if (number > bigNumber) {
//       bigNumber = number;
//     }
//   }
//   return bigNumber;
// }

// // Вызовы функции для проверки
// console.log(findLargestNumber([1, 2, 3])); // 3

// console.log(findLargestNumber([27, 12, 18, 5])); // 27

// console.log(findLargestNumber([31, 128, 14, 74])); // 128

//7
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
//
//
//
//
//
//
//
//

// // // Вызовы функции для проверки
// // addUniqueNumbers(1, 2, 3);
// // console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

// // addUniqueNumbers(12, 2, 3, 19);
// // console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

// // addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// // console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

//8
/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/
//
// const filterFromArray = function(arr) {
//
//
//
//
//
//
//
//
//
//
// // Вызовы функции для проверки
// console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

// console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]

