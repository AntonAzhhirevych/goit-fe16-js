'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
let userInput = prompt('Введите пароль!');

if (!userInput) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
