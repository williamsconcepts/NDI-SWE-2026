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
for (let i = 0; i < 3; i++) {
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