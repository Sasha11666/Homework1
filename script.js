const guessSeason = () => {
  let monthNumber = Number(prompt('Введите номер месяца'));
  let season 
  switch(monthNumber) {
    case 1:
    case 2:
    case 12:
      season = 'зима';
      break;
    case 3:
    case 4:
    case 5:
      season = 'весна';
      break;
    case 6:
    case 7:
    case 8:
      season = 'лето';
      break;
    case 9:
    case 10:
    case 11:
      season = 'осень';
      break;
    default:
      season = 'У нас 12 месяцев :)';
      break;
  
  }
  console.log(season)
  return season;
  
}

const memorizeWord = () => {
  let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  fruits = fruits.sort(() => Math.random() - 0.5);
  alert(fruits);

  let guessFirst = prompt('Чему равнялся первый элемент массива?');
  let guessLast = prompt('Чему равнялся последний элемент массива?');
  if(guessFirst.toLowerCase() == fruits[0].toLowerCase() && guessLast.toLowerCase() == fruits[6].toLowerCase()) {
    alert('Ты победил!')
  } else if(guessFirst.toLowerCase() == fruits[0].toLowerCase() || guessLast.toLowerCase() == fruits[6].toLowerCase()){
    alert('Ты был близок к победе!')
  } else {
    alert('Будь внимательнее!')
  }
}