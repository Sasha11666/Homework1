const minNumber = (a, b) => {
  if(a < b) {
    return a;
  }else if(b < a) {
    return b;
  }else if(a === b) {
    return a;
  }
};

// task 2
const oddEven = (number) => {
  if(number % 2 == 0) {
    return "Число четное";
  }else {
    return "Число нечетное";
  }
};

// task 3
const squareNumber = (number) => {
  console.log(Math.pow(number, 2))
};

const returnSquareNumber = (number) => {
  return(Math.pow(number, 2))
};

// task 4
const greet = () => {
  let age = prompt("Сколько Вам лет?");
  if(age < 0) {
    console.log('Вы ввели неправильное значение');
  }else if(age >= 0 && age < 13) {
    console.log("Привет, друг!");
  }else if( age > 12) { 
    console.log("Добро пожаловать!");
  }
};

// task 5
const checkNumber = (number1, number2) => {
  if(isNaN(number1) || isNaN(number2)) {
    console.log("Одно или оба значения не являются числом");
  }else {
    return(number1 * number2);
  }
};

//task 6
const cubeNumber = () => {
  let number = prompt("Ваше число?");
  if(isNaN(number)) {
    console.log("Переданный параметр не является числом");
  }else {
    let result = Math.pow(number, 3);
    console.log(`${number} в кубе равняется ${result}`);
    return result
  }
};

// task 7
function getArea() {
  return(Math.PI * Math.pow(this.radius, 2))
};

function getPerimeter() {
  return(2 * Math.PI * this.radius)
};

const circle1 = {
  radius: 25,
  area: getArea,
  perimeter: getPerimeter,
};

const circle2 = {
  radius: 15,
  area: getArea,
  perimeter: getPerimeter,
};

console.log(circle1);
console.log(circle1.area());
console.log(circle1.perimeter());

