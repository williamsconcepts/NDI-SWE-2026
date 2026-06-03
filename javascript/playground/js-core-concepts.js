/**
 *
 * String Manipulation
 *
 * Strings are sequences of characters used to represent text in JavaScript. String manipulation means changing,
   searching, splitting, or combining strings. Important String Methods:
• length → gets string length
• toUpperCase() → converts to uppercase
• toLowerCase() → converts to lowercase
• trim() → removes spaces
• includes() → checks if text exists
• replace() → replaces part of a string
• split() → converts string into an array
 */

let text = " Ebubedike ";

console.log(text.length);
console.log(text.trim());
console.log(text.trim().length);
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Ebube"));
console.log(text.replace("Ebube", "chidiebube"));

let sentence = "I love Maria";
console.log(sentence.replace("maria", "Coding"));

let words = sentence.split(" ");
console.log(words);

/**
 *
 * Array Manipulation
 *
 * Array store multiple values in a single variable. Array manipulation means adding, removing, sorting, or looping through data. Important Array Methods:
 *
 * push() -> adds items to end
 * pop() -> removes last item
 * shift() -> removes first item
 * unshift() -> add item the beginning
 * map() -> creats a new transformed array
 * filter() -> returns matching items
 * find() -> return first matching item
 * includes() -> checks if value exists
 */

// Array declaration
let fruits = ["Apple", "Mango", "Bananna"];

// push
fruits.push("Orange");
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);


// map
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((num) => num * 2);
console.log(doubled);

let names = ["ebube", "dike"];
let upper = names.map((names) => names.toUpperCase());
console.log(upper);

// filter
let even = numbers.filter((num) => num % 2 === 0);
console.log(even, " even numbers");

let odd = numbers.filter((num) => num % 2 === 1);
console.log(odd, " odd numbers");

let found = numbers.find((num) => num > 3);
console.log(found);

//more on Arrays

arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

arr3 = new Array(10);
arr4 = [10];

console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

const arrt = ["hi there"];
arrt[0] = "new value";
console.log(arrt[0]);
/**
 *
 * Object Methods
 *
 * Objects store data using key-value pairs. Methods are functions inside objects. Important Object concepts:
 *
 * Access properties using dot notation or brackets
 * Add or update properties
 * Use methods inside objects
 * Object.keys() -> get keys
 * Object.values() -> get values
 * Object.entries() -> get key-value pairs
 */

let person = {
  name: "Ebube",
  age: 28,

  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};

console.log(person.name);
person.greet();

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

/**
 * Scope chaining
 *
 * Scope determines where variables can be accessed. Javascript uses lexical scope, meaning inner functions can access variables from outer functions.
 *
 * Types of scope:
 * Global scope
 * Function scope
 * Block scope (let and const) Scope chaining allows javascript to search for variables from inner scope outward.
 *
 * Key Things to Remember

✅ Variables can be accessed from inner scopes
✅ JavaScript searches outward
✅ Inner functions inherit access to parent variables
❌ Parent scopes cannot access child scope variables
✅ This is called lexical scoping or scope chaining
 * 
 */

let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    let innerVar = "I am inner";

    console.log(globalVar);
    console.log(outerVar);
    console.log(innerVar);
  }
  inner();
}
outer();


/**
 * 
 * Loops
 * 
 * Loops repeat code until a condition becomes false. Common loops:
 * for loop
 * while loop
 * do-while loop
 * forEach loop
 * for-in loop
 * for-of loop
 * 
 */

//

// for loop Ex. 1
for (let step = 0; step < 5; step++) {
  console.log("walking step " + step);
}

// for loop Ex. 2
for (let i = 10; i > 0; i--) {
  console.log("Number: " + i);
}

// forEach loop Ex. 1
let colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));

// forEach loop Ex. 2
[1,2,3,4].forEach(num => console.log(num));


// while loop Ex. 1
let count = 0;
while(count < 5) {
  console.log("count: " + count);
  count++
}

// do-while loop Ex. 1
let num = 0;
do {
  console.log("num: " + num);
  num++;
} while (num < 5);

// for-in loop Ex. 1
let person1 = {
  name: "Alice",
  age: 30,
  city: "New York"
};
for (let key in person1) {
  console.log(key + ": " + person1[key]);
}

// for-in loop Ex. 2
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
}

for (let key in car) {
  console.log(key, car[key]);
}

// for-of loop Ex. 1
let numbers1 = [10, 20, 30];
for (let num of numbers1) {
  console.log(num);
}

console.log("\n=========================================\n");

/**
 * Reduce()
 * 
 * The reduce() method executes a reducer function on each element of the array, resulting in a single output value. It takes a callback function and an optional initial value as arguments. The callback function takes four arguments: accumulator, currentValue, currentIndex, and array. The reduce() method processes each element of the array and accumulates the result based on the logic defined in the callback function.
 * 
 * Accumulator: This is the accumulated value that is returned after processing each element. It can be initialized with an optional initial value.
 * CurrentValue: This is the current element being processed in the array.
 * CurrentIndex: This is the index of the current element being processed.
 */

// Example 1: Sum of an array
const nums = [1, 2, 3, 4, 5];

// At cycle 1: accumulator = 0, currentValue = 1 → returns 1
// At cycle 2: accumulator = 1, currentValue = 2 → returns 3
// At cycle 3: accumulator = 3, currentValue = 3 → returns 6
// At cycle 4: accumulator = 6, currentValue = 4 → returns 10
// At cycle 5: accumulator = 10, currentValue = 5 → returns 15

const sum = nums.reduce((currentValue, accumulator) => currentValue + accumulator, 0);
console.log(sum);

// Example 2: Finding the maximum value in an array
const values = [10, 5, 8, 20, 15];

// At cycle 1: accumulator = 10, currentValue = 5 → returns 10
// At cycle 2: accumulator = 10, currentValue = 8 → returns 10
// At cycle 3: accumulator = 10, currentValue = 20 → returns 20
// At cycle 4: accumulator = 20, currentValue = 15 → returns 20

const max = values.reduce((currentValue, accumulator) => currentValue > accumulator ? currentValue : accumulator);
console.log(max);

// Example 3: Counting occurrences of elements in an array
const fruits1 = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

// At cycle 1: accumulator = {}, currentValue = 'apple' → returns { apple: 1 }
// At cycle 2: accumulator = { apple: 1 }, currentValue = 'banana' → returns { apple: 1, banana: 1 }
// At cycle 3: accumulator = { apple: 1, banana: 1 }, currentValue = 'orange' → returns { apple: 1, banana: 1, orange: 1 }
// At cycle 4: accumulator = { apple: 1, banana: 1, orange: 1 }, currentValue = 'apple' → returns { apple: 2, banana: 1, orange: 1 }
// At cycle 5: accumulator = { apple: 2, banana: 1, orange: 1 }, currentValue = 'banana' → returns { apple: 2, banana: 2, orange: 1 }
// At cycle 6: accumulator = { apple: 2, banana: 2, orange: 1 }, currentValue = 'apple' → returns { apple: 3, banana: 2, orange: 1 }

const fruitCounts = fruits1.reduce((counts, fruit) => {
  counts[fruit] = (counts[fruit] || 0) + 1;
  return counts;
}, {});
console.log(fruitCounts);

// Example 4: given an array of product objects in a user cart, write a function that takes in an array of produt objects, and returns the sum of the prices multiplie by the qunatity of all the items in the cart.

// At cycle 1: accumulator = 0, currentValue = { name: "Rice", price: 10, quantity: 2 } → returns 20
// At cycle 2: accumulator = 20, currentValue = { name: "Beans", price: 20, quantity: 1 } → returns 40
// At cycle 3: accumulator = 40, currentValue = { name: "Garri", price: 15, quantity: 3 } → returns 85
const cart = [
  { name: "Rice", price: 10, quantity: 2 },
  { name: "Beans", price: 20, quantity: 1 },
  { name: "Garri", price: 15, quantity: 3 }
];

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(`Sum Total: ${total}`);


// Example 5: Given an array of numbers with some numbers repeated, write a function that takes in an array of numbers, and returns a object in the signature {number: 1, occurrances: 2} where the number is the number in the array, and occurances is the number of times that number appears in the array.

// At cycle 1: accumulator = {}, currentValue = 1 → returns {number: 1, occurrances: 1}



const repeatedNumbers = [1, 2, 3, 2, 4, 1, 5, 3, 4, 2, 1];
const numberCounts = repeatedNumbers.reduce((counts, number) => {
  if (!counts[number]) {
    counts[number] = { number: number, occurrences: 0 };
  }
  counts[number].occurrences++;
  return counts;
}, {});
console.log(numberCounts);