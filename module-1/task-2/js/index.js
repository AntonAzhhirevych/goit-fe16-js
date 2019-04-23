'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const userQuestion = prompt('Какое количество дроидов вы хотите купить?');

if (userQuestion === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = userQuestion * pricePerDroid;

  if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(`Вы купили ${userQuestion} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}
