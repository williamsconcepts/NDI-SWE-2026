const rand = Math.random(); // returns a decimal random number betweenn 0 and 1

console.log(rand);

const betweenOneAndTen = Math.floor(rand * 10) + 10;

console.log("Between 1 and 10", betweenOneAndTen);
