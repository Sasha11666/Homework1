// task 1
console.log('weLcomE'.toUpperCase());

// task 2


const selectWords = (arr, word) => {
  let selected = [];
  arr.forEach((el) => {
    if(el.toLowerCase().startsWith(word.toLowerCase())) {
      selected.push(el);
    
    } 
  })
  return selected;
};

console.log(selectWords(['hello', 'Spider', 'Witcher', 'Lord', 'Spine'], 'spi'));

// task 3
let num = 32.58884;
Math.floor(num);
Math.ceil(num);
Math.round(num);

// task 4
console.log(Math.max(52, 53, 49, 77, 21, 32));

// task 5
const randomNum = () => {
  console.log(Math.round(Math.random() * 10))
};

randomNum();

// task 6
const randomInt = (integer) => {
  let arrs = [];
  
  for( i = 0; i < Math.floor(integer/2); i++) {
    arrs.push(Math.floor(Math.random() * integer))
  }
  return arrs
};

console.log(randomInt(7));

// task 7
const getRange = (minNum, maxNum) => {
  let result = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  return result
};

console.log(getRange(3, 7));

// task 8
let myDate = new Date();
console.log(myDate);

// task 9
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + days73;
let afterDays73 = new Date(searchDate);
console.log(afterDays73);

// task 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let toDay = new Date();
let fullDateTime = "Дата: " + toDay.getDate() + " " + months[toDay.getMonth()] + " " + toDay.getFullYear() + " " + "-" + " это " + days[toDay.getDay()] + "\n" + "Время: " + toDay.getHours() + ":" + toDay.getMinutes() + ":" + toDay.getSeconds();
console.log(fullDateTime);




