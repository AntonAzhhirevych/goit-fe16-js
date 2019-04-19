'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const userQuestion = prompt('Какое количество дроидов вы хотите купить?');

if (!userQuestion) {
  console.log('Отменено пользователем!');
} else if (!Number(userQuestion)) {
  alert('Вы перепутали цифры с буквами! Давайте немного внимательнее!');
} else {
  const totalPrice = Number(userQuestion) * pricePerDroid;

  if (credits < totalPrice) {
    alert('Недостаточно средств на счету!');
  } else {
    const balance = credits - totalPrice;
    alert(`Вы купили ${userQuestion} дроидов, на счету осталось ${balance} кредитов.`);
  }
}
