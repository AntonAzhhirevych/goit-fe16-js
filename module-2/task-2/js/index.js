'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let inputUser;

while (inputUser !== null) {
  inputUser = prompt('Введите пароль!');

  if (inputUser === null) {
    break;
  }
  if (passwords.includes(inputUser)) {
    alert('Добро пожаловать!');
    break;
  }
  if (attemptsLeft === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  } else {
    attemptsLeft -= 1;
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
}



