/**
 * Search and Utility Methods
 * 
 * In this section, we will explore some of the most commonly used search and utility methods in JavaScript, including:
 * - find() -> used to search for an item in an array that satisfies a certain condition, and returns the first item that matches the condition.
 * - findIndex() -> used to search for an item in an array that satisfies a certain condition, and returns the index of the first item that matches the condition.
 * - indexOf() -> used to search for an item in an array and returns the index of the first occurrence of the item.
 * - lastIndexOf() -> used to search for an item in an array and returns the index of the last occurrence of the item.
 * - includes() -> used to check if an item exists in an array and returns a boolean value.
 * - foreach() -> used to execute a provided function once for each array element.
 * - every() -> used to check if all elements in an array satisfy a certain condition and returns a boolean value.
 * - some() -> used to check if at least one element in an array satisfies a certain condition and returns a boolean value.
 * - map() -> used to create a new array by applying a provided function to each element in the original array.
 */

// Example 1: Using find() to search for an object in an array of objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
];
const user = users.find((user) => user.age === 30);
console.log(user); 

// Example 2: Using findIndex() to search for an object in an array of objects
const userIndex = users.findIndex((user) => user.age === 40 || user.name === "Charlie");
console.log(userIndex);

// Example 3: Using indexOf() to search for an item in an array
const fruits = ["apple", "banana", "cherry", "date", "fig", "grape"];
const index = fruits.indexOf("fig");
console.log(index);

// Example 4: Using lastIndexOf() to search for an item in an array
const numbers = [1, 2, 3, 4, 5, 2, 6];
const lastIndex = numbers.lastIndexOf(6);
console.log(lastIndex);

// Example 5: Using includes() to check if an item exists in an array
const colors = ["red", "green", "blue", "yellow"];
const hasGreen = colors.includes("green");
console.log(hasGreen);

// Example 6: Using forEach() to execute a function for each element in an array
const names = ["Alice", "Bob", "Charlie", "David"];
names.forEach((name) => {
    console.log(`my names is ${name}`);
});

// Example 7: using every() to check if all elements in an array satisfy a condition
const ages = [25, 30, 35, 40];
const allAbove20 = ages.every((age) => age > 20);
console.log(allAbove20);

// Example 8: using some() to check if at least one element in an array satisfies a condition
const someAbove30 = ages.some((age) => age > 30);
console.log(someAbove30);

// Example 9: using one of the methods above, write a function that checks if a word is exactly the same when spelt forwards and backwards. assignment 3
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));