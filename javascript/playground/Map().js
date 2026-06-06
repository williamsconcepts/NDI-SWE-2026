/**
 * 👉 Map (capital M) is a built-in object that stores key-value pairs, like an object — but more powerful and flexible.
 */

const myMap = new Map();

myMap.set("name", "john");
myMap.set("age", 25);

// myMap.delete("age")

console.log(myMap.size);
console.log(myMap.get("name"));
console.log(myMap.get("age"))

console.log("\n================================\n");

// Looping through a Map

const userMap = new Map();

userMap.set("name", "Grace");
userMap.set("age", 22);
userMap.set("city", "Lagos")

for (const [key, value] of userMap) {
    console.log(key, value)
}