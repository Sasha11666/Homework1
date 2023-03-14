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