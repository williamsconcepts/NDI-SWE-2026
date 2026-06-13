const now = new Date();
console.log(now);

const today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

// month starts from 0-11

// calculating Age

function calAge(year) {
  const currYr = new Date().getFullYear();
  return currYr - year;
}
console.log(calAge(1998));
