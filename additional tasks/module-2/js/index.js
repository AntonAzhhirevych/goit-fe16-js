'use strict';

//1
/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// // Удалить первый элемент массива
// users.shift(0);
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить последний элемент массива
// users.pop(2);
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// users.unshift('Lux');
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push('jay', 'Kiwi');
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
// const indexFinded = users.indexOf(userToDelete);
// users.splice(indexFinded, 1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = 'Jay';
// users.splice(users.indexOf(userToInsertBefore), 0, 'Kong');
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

///2
// /*
//  * Есть массив имен пользователей users
//  *
//  * Напиши цикл, который для каждого пользователя будет выводить в консоль
//  * сообщение в формате [номер элемента] - [значение элемента].
//  *
//  * Нумерация должна начинаться с 1. К примеру для первого элемента массива
//  * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
//  *
//  * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
//  */

// const users = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

// for (const user of users) {
//   const arrIndex = users.indexOf(user);
//   console.log(`${arrIndex + 1} ${user}`);
// }

///3
/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка
// const message = 'Proin sociis natoque et magnis parturient montes mus';
// let price = 0;

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// let words = message.split(' ');
// console.log(words);

// // Выведи в консоли длину массива words

// console.log(words.length); // 8

// // Вычисли сколько будет стоить гравировка и запиши результат в переменную price
// const priceOne = 10;
// price = priceOne * words.length;
// console.log(price); // 80
// //
//

//4
/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
*/

// while (true) {
//   let inputUser = prompt('число больше 100');
//   inputUser = Number(inputUser);
//   if (inputUser === 0) {
//     console.log('Canceled');
//     break;
//   } else if (inputUser > 100) {
//     console.log('Correct');
//     break;
//   }
// }

//
//
//
//5
/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// for (const element of numbers) {
//   if (element > num) {
//     matched.push(element);
//   }
// }
// console.log(matched); // [17, 14, 14, 32, 18, 26]

///6
/*
Напиши скрипт, который проверяет произвольную строку 
в переменной message и находит в ней самое длинное слово,
записывая его в переменную longestWord.
*/

// const message = 'May the force be with you';
// let wordMessage = message.split(' ');
// let longestWord;
// longestWord = wordMessage[0];
// for (const word of wordMessage) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// console.log(wordMessage);
// console.log(longestWord); // 'force'

//7
/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// const min = [0];
// const max = [numbers.length - 1];
// let value = prompt(`Введите число между ${min} и ${max}`);
// let message;
// numbers.includes(Number(value)) ? (message = 'Happy') : (message = 'Nou');
// alert(message);

