'use strict';

const delivery = prompt('Куда вы хотите оформить доставку?');

if (delivery === null) {
  console.log('Отменено пользователем!');
}

switch (delivery.toLowerCase()) {
  case 'китай':
    console.log(`Доставка в китай будет стоить 100 кредитов`);
    break;

  case 'южная америка':
    console.log('Доставка в южная америка будет стоить 250 кредитов');
    break;

  case 'австралия':
    console.log('Доставка в австралия будет стоить 170 кредитов');
    break;

  case 'индия':
    console.log('Доставка в индия будет стоить 80 кредитов');
    break;

  case 'ямайка':
    console.log('Доставка в ямайка будет стоить 120 кредитов');
    break;

  default:
    console.log('В вашей стране доставка не доступна!');
}
