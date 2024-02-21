//Задача 1
let a = 10;

if (a === 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Задача 2
let baatir = 33;

if (baatir <= 20) {
  console.log("В первом подъезде");
} else if (baatir <= 48) {
  console.log("Во втором подъезде");
} else if (baatir <= 90) {
  console.log("В третьем подъезде");
} else {
  console.log("Условие не выполнено!");
}

//Задача 3
let aTwo = 2;

if (aTwo < 1 || aTwo > 5) {
  console.log("Неверно");
} else {
  console.log("Верно");
}

//Задача 4
//Задача 5
const hour = 6;
let names = "Nursultan";

if (hour >= 6 && hour <= 12) {
  console.log(`Доброе утро `);
} else if (hour >= 13 && hour <= 17) {
  console.log("Добрый день!");
} else {
  console.log(`Добрый вечер! ${names}`);
}

//Задача 6
let years = 60;

if (years < 6 || years >= 65) {
  console.log("Скидка");
} else {
  console.log("Без скидки");
}

//Задача 7
const value = Math.random();

if (value < 0.5) {
  console.log("Орел " + value);
} else {
  console.log("Решка " + value);
}

//Задача 8
const number = 65;

// После взятие остатка от деления number равно 0 то выйдет чётное, если нет то нечетное
if (number % 2 === 0) {
  console.log("Число чётное");
} else {
  console.log("Число нечётное");
}

//Задача 9
let num = 5;

num === 5 ? console.log("Five"): console.log("Not five");

