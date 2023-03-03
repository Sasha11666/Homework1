let a = 10;
alert(a);
a = 20;
alert(a);

// task 2
const firstIphoneDate = 2007;
alert(firstIphone);

// task 3
const jsInventor = "Brendon Eich";
alert(jsInventor);

// task 4
let firstNumber = 10;
let secondNumber = 2;
alert(firstNumber + secondNumber);
alert(firstNumber - secondNumber);
alert(firstNumber * secondNumber);
alert(firstNumber / secondNumber);

//task 5
let degree = 2**5;
alert(degree);

//task 6
let c = 9;
let d = 2;
alert(c % d);

//task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);



//task 8
let age = prompt('Сколько Вам лет?');
alert(age);



//task 9
let user = {
  name: 'Ellie',
  age: 19,
  isAdmin: true,
}

//task 9.1
user["city of residence"] = "Boston";

//task 9.2 
user.age = 14;

//task 9.3 
delete user["city of residence"];

//task 9.4
let info = prompt("Какую информацию хотите узнать пользователе?");
if(info == "имя" || info == "Имя") {
  alert(user.name);
}else if(info=="возраст" || info == "Возраст"){
  alert(user.age);
}else if(info == "админ" || info == "Админ"){
  alert(user.isAdmin);
}else {
  alert("Sorry, I dont't have this information :(")
}

// task 10
let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName}!`);


