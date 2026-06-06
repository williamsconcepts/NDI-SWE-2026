/**
 * Object destructuring
 * 
 * Object Destructuring is a JavaScript feature that lets you extract properties from an object and assign them to variables in a concise way.
 */

// basic syntax

const person = {
    name: "john",
    age: 25,
    city: "Nigeria"
};

const {name, age} = person;

console.log(name);
console.log(age);