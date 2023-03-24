// task1 
const getResult = (arr, callback) => {
  let result = callback(arr);
  return Math.round(result);
}

const sum = (arr) => {
  return arr.reduce((a, b) => a + b);
}

const mult = (arr) => {
  return arr.reduce((a, b) => a * b);
}

console.log(getResult([45.7, 6, 7, 10], sum));

// task 2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

const sortUsersObjects = (users) => {
  function compareUser(a, b) { 
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
  }
  return(
    users.sort(compareUser)
  );
}

console.log(sortUsersObjects(users));

// task 3
const each = (arr, callback) => {
  return callback(arr);
}

const reversArr = (arr) => {
  return arr.reverse();
}

const toNumberArr = (arr) => {
  return arr.filter(el => !isNaN(+el)).map(el => +el);

}

const arr = [1, '4', false, 78, 'heh', 9, 'two'];
console.log(each(arr, toNumberArr));

// task 4
const getDate = () => {
  const finish = () => {
    console.log('30 секунд прошло');
    clearInterval(date);
  }
  let date = setInterval(() => console.log(new Date), 3000);
  setTimeout(finish, 30000);
}

getDate();

// task 5
function calling(callback) {
  console.log('Звоню!');
  setTimeout(() => {
    console.log('Идут гудки...');
    callback();
}, 1000);
};

function talk() {
  console.log('Разговор')
}

calling(talk);


