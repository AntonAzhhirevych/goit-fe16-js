'use strict';

//task-1
//
/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';

// user.hobby = 'javascript';

// user.premium = false;

//   const keys = Object.keys(user);

//   for(let key of keys){
//       console.log(` ${key} :${user[key]}` );
//   }

// const keys = Object.entries(user);

// for (let el of keys) {
//   let key = el[0];
//   let value = el[1];
//   console.log(`${key}: ${value}`);
// }

//   console.log(user);

//task-2
//
//
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/
// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// const moreTasks = function() {
//   const values = Object.values(tasksCompleted);
// let maxTasks = 0
// for(let val of values){
//   if(val > maxTasks){
//     maxTasks = val;
//   }
// }

//   return `${maxTasks}`;
// };

// console.log(moreTasks());


//
// task-3
//
//
/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
// console.log(countProps({})); // 0

// function countProps(obj) {
//   const objLength = Object.keys(obj).length;
//   return objLength;
// }

// console.log(
//   countProps({a: 1,b: 3, c: 'hello',}),
// ); // 3

//
//
//task-4
//
//
/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки

// 1

// function isObjectEmpty(obj) {
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) return false;
//   }
//   return true;
// }

// 2

// function isObjectEmpty(obj) {
//   const isObject = Object.keys(obj).length;
//   if (isObject) {
//     return false;
//   }
//   return true;
// }

// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

//
//
//task-5
//
//
/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// function countTotalSalary(salaries) {
//   const valuesSalaries = Object.values(salaries);

//   let sum = 0;

//   for (let i = 0; i < valuesSalaries.length; i++) {
//     sum += valuesSalaries[i];
//   }
//   return sum;
// }

// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

//
//
//task-6
//
//
/*  
Напиши функцию getAllPropValues(arr, prop), 
которая получает массив объектов и имя ключа. 
Возвращает массив значений определенного поля prop
из каждого объекта в массиве
*/

// const users = [
// { name: 'Poly', age: 7, mood: 'happy' },
// { name: 'Mango', age: 4, mood: 'blissful'},
// { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// const getAllPropValues = function(arr, prop){
//   let getArr = Object.values(arr)
//   if(prop === getArr[key]){
//     console.log(prop);
//   }

// }

// // Вызовы функции для проверки
// console.log(
// getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
// getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
// getAllPropValues(users, 'active')
// ); // []

//
//
//task-7
//
//
/*
 * Расставь отсутствующие this в методах объекта account
 */

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']

//task-8
//
//
/*
 * Расставь отсутствующие this в конструкторе Account
 */

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//   this.getInfo = function() {
//     console.log(`
//       Login: ${login},
//       Pass: ${password},
//       Type: ${type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

//task-9
//
//
/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

// console.log('hello');

// const User = function(name, age, friends) {
//   this.name = name;
//   this.age = age;
//   this.friends = friends;

//   this.getInfo = function() {
//     return `User ${name} is ${age} years old and has ${friends} friends`;
//   };
// };

// const mango = new User('Mango', 2, 20);
// mango.getInfo(); // User Mango is 2 years old and has 20 friends
// console.log(mango.getInfo());

// const poly = new User('Poly', 3, 17);
// poly.getInfo(); // User Poly is 3 years old and has 17 friends
// console.log(poly.getInfo());
