//task 1
let arr = [1, 5, 4, 10, 0, 3];
for(i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if(arr[i] == 10) {
    break
  }
  
};

// task 2
console.log([1, 5, 4, 10, 0, 3].indexOf(4));

//task 3
console.log([1, 3, 5, 10, 20].join(' '));

//task 4
let arrs = [];
for (let i = 0; i < 3; i++) {
  arrs.push([]);
  for (let j = 0; j < 3; j++) {
    arrs[i].push(1);
  }
};
console.log(arrs);

// task 5
let ones = [1, 1, 1];
ones.push(2, 2, 2);
console.log(ones);


// task 6
let sorted = [9, 8, 7, 'a', 6, 5].sort();
sorted.pop();

// task 7
let askUser = Number(prompt('Назовите цифру от 1 до 10'));
let numbers = [9, 8, 7, 6, 5];
let check = numbers.includes(askUser);
if(check) {
  alert('Ваша цифра есть в массиве :)');
}else {
  alert('Увы, но вашей цифры нет в массиве :(');
};

// task 8
let word = 'abcdef';
word = word.split('').reverse().join('');
console.log(word);

// task 9
let double = [[1, 2, 3,],[4, 5, 6]];
let single = [];
for(let arr of double){
  for(let el of arr) {
    single.push(el)
  }
};
console.log(single);

// another way
let nested = [[1, 2, 3,],[4, 5, 6]];
let flat = nested.flat(Infinity);
console.log(flat);

// task 10
let mine = [5, 8, 2, 9, 4];
for(i = 0; i < mine.length - 1; i++) {
  if(i < 4) {
    console.log(mine[i] + mine[i + 1])
  }else {
    console.log(mine[i])
  }
};

// task 11
userArr = prompt('Введите несколько чисел через пробел');
let arrFixed = userArr.split(' ').map(el => Number(el));
console.log(arrFixed);
let squareNum = (arr) => {
  return arr.map(el => Math.pow(el, 2))
};

console.log(squareNum(arrFixed));
alert(`Квадраты ваших чисел ${squareNum(arrFixed)}`);

// task 12
const getLengthWord = (arr) => {
  return arr.map(el => el.length)
};

console.log(getLengthWord(['ellie', 'Sam', 'night', 'summer']));

// task 13
const getNegative = (arr) => {
  return arr.filter(el => el < 0)
};

console.log(getNegative([3, 6, -7, 0, -5]));

// task 14
let first = [];
const getRandomNum = () => {
  return Math.floor(Math.random() * 10);
};

for(i = 0; i < 10; i++) {
  first.push(getRandomNum())
};

let second = first.filter(el => el % 2 == 0);

console.log(first);
console.log(second);

// task 15
let last  = [];
const getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
};

for(i = 0; i < 6; i++) {
  last.push(getNum())
};

let average = last.reduce((a, b) => (a + b)) / last.length;

console.log(last);
console.log(average);


















