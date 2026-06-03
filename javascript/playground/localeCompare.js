/**
 * The `localeCompare()` method compares two strings in the current locale and returns a number indicating whether the reference string comes before, after, or is the same as the given string in sort order.
 * 
 * 
 * localeCompare() is a javascript string method used to compare two strings alphabetically according to the rules of a language (locale).
 * 
 * It returns:
 * -1 (or a negative number) if string1 comes before string2
    0 if both strings are equal
    1 (or a positive number) if string1 comes after string2
 * 
 */
// Basic sorting of strings in an array

const fruits = ['banana', 'apple', 'grape', 'orange'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);


console.log("banana".localeCompare("apple"));