
'use strict';


//task 1


const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
let userInput = prompt('Введите пароль!');

if (!userInput){
    message = ('Отменено пользователем!')
}else if(userInput === ADMIN_PASSWORD){
    message = ('Добро пожаловать!');
}
else{
    message = ('Доступ запрещен, неверный пароль!');
}
alert(message);




//task 2


const credits = 23580;
const pricePerDroid = 3000;
const userQuestion = prompt('Какое количество дроидов вы хотите купить?')

if(!userQuestion){
    console.log('Отменено пользователем!');
} else if(!Number(userQuestion)){
  alert('Вы перепутали цифры с буквами! Давайте немного внимательнее!')
}
else{
   const totalPrice = Number(userQuestion) * pricePerDroid;

 if (credits < totalPrice) {
  alert('Недостаточно средств на счету!');
 } else {
    const balance = credits - totalPrice;
    alert(`Вы купили ${userQuestion} дроидов, на счету осталось ${balance} кредитов.`);
  }
}



//task 3


const delivery = prompt('Куда вы хотите оформить доставку?');
let prise
let country

if(!delivery){
  alert('ну и ладно!');
}
else{
   country = (delivery.toLowerCase());
}

switch(delivery.toLowerCase()){

  case 'китай':
    prise = 100;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`)
    break;

  case 'южная америка':
    prise = 250;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`)
    break;

  case'австралия':
    prise = 170;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`)
    break;

  case'индия' :
    prise = 80;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`)
    break;

  case'ямайка':
    prise = 120;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`)
    break;

  default:
    alert('В вашей стране доставка не доступна')
}

