'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
  if (login.length >= 4 && login.length <= 16) {
    //якщо login підійде в довжині то повернеться true якщо ні false
    return true;
  }
  return false;
}

function isLoginUnique(allLogins, login) {
  for (const log of allLogins) {
    // переберу масив і порівняю login  з кожним словом масиву
    if (log === login) {
      // якщо введене слово вже є в масиві повернемо false в іншому випадку true
      return false;
    }
  }
  return true;
}

function addLogin(allLogins, login) {
  if (isLoginValid(login) === false) {
    // якщо вище вказана  функція повертає false  повернемо повідомлення в clg
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (isLoginUnique(allLogins, login) === true) {
    // якщо вище вказана функція поверне true  добавимо login в масив і повернемо повідомлення в clg
    allLogins.push(login);
    return console.log('Логин успешно добавлен!');
  }
  return console.log('Такой логин уже используется!'); // якщо в масиві вже є такий логін повернемо повідомдення в clg
}

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
