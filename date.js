let date = new Date();
let text = document.createElement('h1');
document.body.appendChild(text);
function addZero(num) {
  if (num > 0 && num < 10) {
    return '0' + num;
  }
}

text.innerHTML = `${date.getFullYear()}:${addZero(
  date.getMonth() + 1
)}:${addZero(
  date.getDate()
)} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

let date2 = '2021-06-05';
console.log(date2.split('-').reverse().join('.'));

let day = date.getDay();
function isWeekend(day) {
  let isWeekend = false;
  if (day === 0 || day === 6) {
    isWeekend = true;
  }
  return isWeekend;
}
console.log(isWeekend(day));

let month = date.getMonth();
function getMonth(month) {
  let months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sem',
    'oct',
    'nov',
    'dec',
  ];
  return console.log(months[month]);
}
getMonth(month);

let myBirthdayDate = new Date(1995, 05, 14);
let myBirthdayDay = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[myBirthdayDay]);

let timestampDate = new Date(2021, 01, 05);
console.log(timestampDate.getTime());

let firstDate = new Date(1988, 03, 01);
let secondDate = new Date(2000, 01, 10);
let diff = (secondDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff);

let myAge = Math.floor(
  (date.getTime() - myBirthdayDate.getTime()) / (1000 * 60 * 60 * 24 * 30 * 12)
);
console.log(myAge);

{
  let now = new Date();
  let date = new Date(2015, 4, 25, 12, 59, 59);

  let diffInDays = (now - date) / (1000 * 60 * 60 * 24);
  console.log(diffInDays);
}

let dateIsLeap = new Date(2020, 2, 0);
function isLeap(date) {
  let isLeap = false;
  if (date.getMonth() === 1 && date.getDate() === 29) {
    isLeap = true;
  }
  return isLeap;
}

console.log(isLeap(dateIsLeap));

function checkDate(year, month, day) {
  let isValid = false;
  let date = new Date(year, month, day);
  if (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  ) {
    isValid = true;
  }
  return isValid;
}
console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 32));

{
  let now = new Date();
  let date = new Date(now.getFullYear(), 11, 31);
  function whatDayIsNewYear(date) {
    console.log(date.getDay());
  }
  whatDayIsNewYear(date);
}

//Определите, сколько дней осталось до нового года
function daysToNewYear() {
  let now = new Date();
  let newYearDate = new Date(now.getFullYear(), 11, 31);
  let diff = (newYearDate - now) / (1000 * 60 * 60 * 24);
  return diff;
}
console.log(daysToNewYear());

//Определите, сколько секунд секунд осталось до конца дня.
function secondsTillEndOfDay() {
  let now = new Date();
  let endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59
  );
  let diff = (endOfDay - now) / 1000;
  return diff;
}
console.log(secondsTillEndOfDay());

//Определите, сколько пятниц 13-е в текущем году.
{
  function howMuchFridays13() {
    let now = new Date();
    let year = now.getFullYear();
    let counter = 0;
    for (let month = 0; month <= 11; month++) {
      for (let day = 1; day <= 31; day++) {
        let date = new Date(year, month, day);
        if (date.getDay() === 5 && date.getDate() === 13) {
          counter = counter + 1;
        }
      }
    }
    return counter;
  }
  console.log(howMuchFridays13());
}
