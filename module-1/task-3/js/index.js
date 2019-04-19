'use strict';

const delivery = prompt('Куда вы хотите оформить доставку?');
let prise;
let country;

if (!delivery) {
  alert('ну и ладно!');
} else {
  country = delivery.toLowerCase();
}

switch (delivery.toLowerCase()) {
  case 'китай':
    prise = 100;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'южная америка':
    prise = 250;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'австралия':
    prise = 170;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'индия':
    prise = 80;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'ямайка':
    prise = 120;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
