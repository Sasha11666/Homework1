for(i=0; i < 2; i++) {
  console.log('Привет');
}

//task 2
for(i=1; i <= 5; i++) {
  console.log(i);
}

//task 3
for(i = 7; i <= 22; i++) {
  console.log(i);
}

//task 4
let obj = {
  Коля: '200',
  Петя: '400',
  Вася: '300',
}



for(let i in obj){
  console.log(`${i} - зарплата ${obj[i]} долларов`);
}

//task 5
n = 1000;
let step = 1;

while(true){
  
  let num = 1000/(2 * step);
  step++;
  if(num < 50) {
    console.log(num);
    break;
  }
}
//num = 45.45454545454545;

//task 6 
let firstFriday = 3;

for(i = 1; i <= 31; i++){
  if(i % 7 === 3){
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
  }
}