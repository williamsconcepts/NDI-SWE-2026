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

// Example 4: given an array of product objects in a user cart, write a function that takes in an array of produt objects, and returns the sum of the prices multiply by the qunatity of all the items in the cart. assignment 1

// At cycle 1: accumulator = 0, currentValue = { name: "Rice", price: 10, quantity: 2 } → returns 20
// At cycle 2: accumulator = 20, currentValue = { name: "Beans", price: 20, quantity: 1 } → returns 40
// At cycle 3: accumulator = 40, currentValue = { name: "Garri", price: 15, quantity: 3 } → returns 85
const cart = [
  { name: "Rice", price: 10, quantity: 2 },
  { name: "Beans", price: 20, quantity: 1 },
  { name: "Garri", price: 15, quantity: 3 }
];
// why this works: the reduce method processes each item in the cart array and accumulates the total price by multiplying the price and quantity of each item and adding it to the accumulator.
const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(`Sum Total: ${total}`);


// Example 5: Given an array of numbers with some numbers repeated, write a function that takes in an array of numbers, and returns a object in the signature {number: 1, occurrances: 2} where the number is the number in the array, and occurances is the number of times that number appears in the array using reduce. assignment 2

const repeatedNumbers = [1, 2, 3, 2, 4, 1, 5, 3, 4, 2, 1];

const numberCounts = (repeatedNumbers) => {
  const numberCounts = repeatedNumbers.reduce((counts, number) => {
    if (!counts[number]) {
      counts[number] = { number: number, occurrences: 0 };
    }
    counts[number].occurrences++;
    return counts;
  }, {});
  return numberCounts;
};

console.log(numberCounts(repeatedNumbers));