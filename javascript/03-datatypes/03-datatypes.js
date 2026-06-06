<<<<<<< HEAD
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
=======
/* ================= Primitive Data Types ============== */

/* Number: This refers to all numeric values, including integers and floating-point numbers. */
let age = 40; /* Integer number */
let point = 6.78; /* Floating point number */

/* String: This refers to a sequence of characters enclosed in single quotes, double quotes, or backticks. */
let firstName = "Annie";
let lastName = 'Joe';
let middleName = `Yales`;

/* Boolean Values: This refers to values that are either true or false. */
let isStudent = true;
let isUnemployed = false;

/* Null: This refers to the intentional absence of any object value. */
let emptyValue = null;

/* Undefined: This refers to a variable that has been declared but has not been assigned a value. */
let noUser = undefined;
let preferredName;
console.log(preferredName);

/* BigInt This refers to a numeric data type that can represent integers with arbitrary precision. */
let bigIntValue = 10n; /* The 'n' suffix indicates that this is a BigInt value */
console.log(bigIntValue);

/* Symbol: This refers to a unique and immutable data type that can be used as an identifier for object properties. */
let uniqueId = Symbol('id');
console.log(uniqueId);  



/* ============== Non-Primitive (Object) Data Types ============= */
/* Object: This refers to a collection of key-value pairs, where each key is a string and each value can be any data type. */
let user1 = {
    firstName: "John",
    lastName: "Smith",
    middleName: "Carlgon",
    age: 30,
    isEmployed: true,
    email: "johnsmith@email.com",
    address: null,
    hobbies: ["Cycling", "Snowballing", "Wakeboarding", "Gliding"],
    address: {
        street: "123 Address drive",
        city: "PortHarcourt"
    }
}
console.log(user1.hobbies[2])

let user2 = {
    firstName: "Jane",
    lastName: "Smith",
    middleName: "Annie",
    age: 29,
    isEmployed: false,
    email: "janesmith@email.com",
    address: null,
    hobbies: ["Swimming", "Travelling", "Cooking", "Cycling"],
}
console.log(user1);
console.log(user2.middleName);


/* Array: This refers to an ordered collection of values, where each value can be any data type. */
let hobbies = ["Swimming", "Travelling", "Cooking", "Cycling", "Swimming"]; /* One value type array */
let randomTypes = ["Food", false, 14, null, undefined, { name: "Saturn", age: 40 }, [1, 2, 3]]; /* Mixed value type array */
console.log(hobbies);
console.log(randomTypes[0])
console.log(randomTypes[6][1]);
console.log(randomTypes[5].name);


/* Function: This refers to a block of code that performs a specific task when called. */
>>>>>>> 089292008401f3736851002873f61f5c0ece8ffb
const doSomething = function() {
    console.log("This is a function");
}
doSomething();

<<<<<<< HEAD
/**Date: This is a data type used to work with dates and times */
let now = new Date();
console.log(now);

// Regular Expressions:  This is a data type used to work with string patterns
let allAlpha = /[a-zA-Z]/ig;

/**Set: This is a data type use to store key-value pairs, where each does not repeat itself */
=======

/* Date: This is a data type used to work with dates and times. */
let now = new Date();
console.log(now)


/* Regular Expression (RegEx, RegExp): This is a data type used to work with string patterns */
let allAlpha = /[a-zA-Z]/ig;


/* Set: This is a data type used to store a collection of unique values. */
>>>>>>> 089292008401f3736851002873f61f5c0ece8ffb
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
<<<<<<< HEAD
mySet.add(1);
console.log(mySet);


/**Map: This is  a data type used to store key-value pairs, where each key is unique */
=======
mySet.add(1); /* This will not be added to the set because it is a duplicate value */
console.log(mySet);

/* Map: This is a data type used to store key-value pairs, where each key is unique. */
>>>>>>> 089292008401f3736851002873f61f5c0ece8ffb
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key1", "value1");
<<<<<<< HEAD
console.log(myMap);
=======
console.log(myMap);
>>>>>>> 089292008401f3736851002873f61f5c0ece8ffb
