'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  if (Number(input)) {
    numbers.push(Number(input));
  } else if (Number.isNaN(input) === false) {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== null);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сума чисел равна ${total}`);
}
