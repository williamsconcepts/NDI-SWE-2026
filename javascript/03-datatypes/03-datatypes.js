/* Primitive Data Types */


// /* Number: This refers to all numeric values, including integers and floating-point numbers.*/
// let age = 40; // Integer number
// let point = 6.9; // floating point number

// /* string data type */
// let firstName = "Annie";
// let lastName = "Benson";
// let middleNAme = `Adanna`;

// /*Boolean Values: This refers to values that are either true or false */
// let isStudent = true;
// let isUnemployed = false;

// /*Null Values: This refers to the intentional absence of any object value.*/
// let emptyValue = null;

// /*Undefined: This refers to a variable that has been declared but not been assigned a value */
// let noUser = undefined;
// let preferredName;
// console.log(preferredName);

// /* BigInt: This refers to a numeric data type that can represent integer with arbitrary precison. */
// let bigIntValue = 10n;
// console.log(bigIntValue);

// /* Symbols: This refers to a unique and imutable data type that can be used as an  identofier for object properties */
// let uniqueId = Symbol("id");
// console.log(uniqueId);
 


// Non-primitive data types
let user1 = {
  firstName: "Chidiebube",
  middleName: "Ebube",
  lastName: "Williams",
  courseOfStudy: "Microbiology",
  isEmployed: false,
  email: "chidi@gmail.com",
  Address: null
};

let user2 = {
  firstName: "Kendrick",
  middleName: "Lamar",
  lastName: "Duckworth",
  courseOfStudy: "Microbiology",
  isEmployed: true,
  email: "chidi@gmail.com",
  Address: null
};

// console.log(user1);
// console.log(user2.lastName);

/**Array: This refers to an orderd collection of values, where each value can be any type */
let hobbies = ["reading", "running", "Swimming", "Cooking", "cycling"]; // One value tpe array
let randomTypes = ["Food", false, 14, null, undefined, {name: "Ebube", age: 40}, [1,2,3]]; // Mixed value type array

console.log(hobbies);
console.log(randomTypes[5].name);

//function: This refers to a block of code that perfoms a specific task when called.
const doSomething = function() {
    console.log("This is a function");
}
doSomething();

/**Date: This is a data type used to work with dates and times */
let now = new Date();
console.log(now);

// Regular Expressions:  This is a data type used to work with string patterns
let allAlpha = /[a-zA-Z]/ig;

/**Set: This is a data type use to store key-value pairs, where each does not repeat itself */
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet);


/**Map: This is  a data type used to store key-value pairs, where each key is unique */
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key1", "value1");
console.log(myMap);
