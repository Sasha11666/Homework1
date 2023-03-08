// task1
let password = 'BlackGold568';
let userPassword = prompt('Введите пароль');

if(userPassword===password) {
  alert('Пароль введен верно')
}else {
  alert('Пароль введен неверно')
}

//task2
let c = 8;
if(c > 0 && c < 10) {
  console.log("Верно")
}else {
  console.log("Неверно")
}

// task3
let d = 38;
let e = 120;
if(d > 100 || e > 100){
  console.log('Верно')
}else {
  console.log('Неверно')
}

//task4
let a = '2';
let b = '3';
let ab = Number(a) + Number(b);
alert(ab);

// task5
let monthNumber = Number(prompt('Введите номер месяца'));

switch(monthNumber) {
  case 1:
  case 2:
  case 12:
    alert('зима');
    break;
  case 3:
  case 4:
  case 5:
    alert('весна');
    break;
  case 6:
  case 7:
  case 8:
    alert('лето');
    break;
  case 9:
  case 10:
  case 11:
    alert('осень');
    break;
  default:
    alert('У нас 12 месяцев :)');
    break;

}

//task 7
let number = prompt('Пожалуйста, введите любое число');

if(number >= 0){
  if(number % 2 === 0){
    alert('Число четное');
  }else{
    alert('Число нечетное');
  }
}else{
  alert('Вы ввели не число');
}

// task8 task 9
let clientOS = prompt('Вы используете iOS или Android?');
let clientDeviceYear = 2011;


if(clientOS === 'iOS' && clientDeviceYear >= 2015) {
  clientOS = 0;
  alert('Установите версию приложения для iOS по ссылке');
}else if(clientOS === 'iOS' && clientDeviceYear < 2015) {
  clientOS = 0;
  alert('Установите облегченную версию приложения для iOS по ссылке')
} else if(clientOS === 'Android' && clientDeviceYear >= 2015){
  clientOS = 1;
  alert('Установите версию приложения для Android по ссылке');
} else{
  clientOS = 1;
  alert('Установите облегченную версию приложения для Android по ссылке');
}
console.log(clientOS);




