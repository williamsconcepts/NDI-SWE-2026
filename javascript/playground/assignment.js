// assignment 1: given an array of product objects in a user cart, write a function that takes in an array of produt objects, and returns the sum of the prices multiply by the qunatity of all the items in the cart.

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


// assignment 2: Given an array of numbers with some numbers repeated, write a function that takes in an array of numbers, and returns a object in the signature {number: 1, occurrances: 2} where the number is the number in the array, and occurances is the number of times that number appears in the array using reduce. 

const repeatedNumbers = [1, 2, 3, 2, 4, 1, 5, 3, 4, 2, 1];

// why this works: the reduce method processes each number in the repeatedNumbers array and accumulates an object where each key is a number from the array and its value is an object containing the number and its occurrences. If a number is encountered for the first time, it initializes its count to 0, and then increments the count for each occurrence of that number.
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


// assignment 3: using one of the methods above, write a function that checks if a word is exactly the same when spelt forwards and backwards.
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

// why this works: the function takes a word as input, splits it into an array of characters, reverses the array, and then joins it back into a string. It then compares the original word with the reversed word, and if they are the same, it returns true, indicating that the word is a palindrome; otherwise, it returns false.
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));