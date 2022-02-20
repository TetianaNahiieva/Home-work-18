/* Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.
Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/




function addTime(date, secondsFromPrompt, minutesFromPrompt, hoursFromPrompt) {
  let secondsSum = date.getSeconds() + secondsFromPrompt;
  let minutesSum = date.getMinutes() + minutesFromPrompt;
  let hoursSum = date.getHours() + hoursFromPrompt;
 
  if (secondsSum < 60) {
    date.setSeconds(secondsSum)
  } else {
   
    let remainsSeconds= secondsSum % 60; // берем остаток секунд от полных минут
    let fullMinutes = Math.trunc(Math.floor(secondsSum / 60));
   
    date.setSeconds(remainsSeconds)
    minutesSum+=fullMinutes
  }
 
  if (minutesSum < 60) { 
    date.setMinutes(minutesSum)
 
  } else {
   
    let remainsMinutes = minutesSum % 60; // берем остаток минут от полных часов
    let fullHours = Math.trunc(minutesSum / 60);
   
    date.setMinutes(remainsMinutes)
    hoursSum+= fullHours
  }
 
  if (hoursSum < 24) {
    date.setHours(hoursSum)
  } else {
    date.setHours(Math.trunc(hoursSum - 24))
  }
}

let date = new Date();

let seconds = +prompt("Enter seconds", "");
let minutes = +prompt("Enter minutes", "");
let hours = +prompt("Enter hours", "");

console.log(`${hours}, ${minutes}, ${seconds}`)
console.log("BEFORE", date.toString())

addTime(date, seconds, minutes, hours);

console.log("After Calculation", date.toString())


