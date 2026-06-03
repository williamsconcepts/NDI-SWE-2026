
/* ============================== */
/* =========== .map() =========== */
/* ============================== */

/*
    This is used to run a function for each item in an array, and return a new
    array holding the result of the operation done on each item in the array
*/

const arr = [1, 2, 3, 4];

const arrTimesTwo = arr.map(num => num * 2);

console.log(arrTimesTwo);

/* Explanation of operation */
// After 1st cycle | iteration ->  [2, 2, 3, 4] item at index [0] is muliplied by 2, and the rest are unchanged.
// After 2nd cycle | iteration ->  [2, 4, 3, 4] item at index [1] is muliplied by 2, and the rest are unchanged.
// After 3rd cycle | iteration ->  [2, 4, 6, 4] item at index [2] is muliplied by 2, and the rest are unchanged.
// After 4th cycle | iteration ->  [2, 4, 6, 8] item at index [3] is muliplied by 2, and the rest are unchanged.





/*
    Problem Statement:
        Find the credit rating of each user, obtained by muliplying their age and their account balance
*/

const usersArray = [
    { name: "Alice", age: 25, accountBalance: 1000 },
    { name: "Bob", age: 30, accountBalance: 1500 },
    { name: "Charlie", age: 35, accountBalance: 2000 },
    { name: "David", age: 40, accountBalance: 2500 },
]

const enhancedUsersArray = usersArray.map(user => {
    return {
        name: user.name,
        age: user.age,
        accountBalance: user.accountBalance,
        creditRating: user.age * user.accountBalance
    }
})

console.log(enhancedUsersArray);




/*
    Problem Statement:
        Given an array of strings in lowercase, format the strings that the first letter of each is
        capital letter
*/

const places = ["ijebu-ode", "ogbomosho", "akure", "benin-city", "sapele"];

const newPlaces = places.map(place => place[0].toUpperCase() + place.slice(1));

console.log(newPlaces)




/*
    Problem statement:
        Given an array of user object with several properties, return only the names from the objects
*/

const names = usersArray.map(user => user.name);

console.log(names)


/*
    Problem statement: Assignment
        given an array of product objects in a user cart, write a function that takes in an array of produt objects, and returns the sum of the prices multiply by the qunatity of all the items in the cart using the map method.
*/

const cart = [
    { name: "Rice", price: 10, quantity: 2 },
    { name: "Beans", price: 20, quantity: 1 },
    { name: "Garri", price: 15, quantity: 3 }
];

// At cycle 1: item = { name: "Rice", price: 10, quantity: 2 } → returns 20
// At cycle 2: item = { name: "Beans", price: 20, quantity: 1 } → returns 20
// At cycle 3: item = { name: "Garri", price: 15, quantity: 3 } → returns 45

// why this works: the map method returns a new array with the result of the operation done on each item in the array, so we get an array of the prices multiply by the quantity of each item in the cart, and then we use the reduce method to sum up all the prices in the new array.
const total = cart.map(item => item.price * item.quantity).reduce((sum, price) => sum + price, 0);

console.log(`Sum Total: ${total}`);