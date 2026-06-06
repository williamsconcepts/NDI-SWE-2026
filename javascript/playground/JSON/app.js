// fetch("./user.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.name);
//     console.log(data.age);
//   })
//   .catch((error) => {
//     console.log("Error loading JSON:", error);
//   });

/**
 * Parsing JSON
 *
 * A javascript string can be cnverted to a JSON object using the JSON.parse() function.
 *
 * while Object can be converted back to JSON string using the JSON.stringify() method.
 */

let str = `{
  "name": "Malika",
  "age": 50,
  "profession": "programmer",
  "languages": ["JavaScript", "C#", "Python"],
  "address": {
    "street": "Some street",
    "number": 123,
    "zipcode": "3850AA",
    "city": "Utrecht",
    "country": "The Netherlands"
  }
}`;

// converting string to JSON object
let obj = JSON.parse(str);
// console.log(typeof obj);
// console.log(obj);
// console.log(obj.name, "is", obj.age);

// converting JSON object back to string
let dog = {
  name: "doggy",
  breed: "lhasa",
};

let strdog = JSON.stringify(dog);
// console.log(typeof strdog);
// console.log(strdog);

/**
 * Practice exercise
 *
 * This exercise will demonstrate the use of JSON methods to parse JSON and convert string values to JSON. Using JSON methods with JavaScript, convert a JSON formatted string value to a JavaScript object and convert a JavaScript object into a string representation of the JSON object:
 * 
1. Create a JSON object with several items and objects. You can use the JSON object from the previous lesson.

2. Using the JSON stringify() method, convert the JSON JavaScript object into a string version and assign it to a variable named newStr [{"name":"Learn JavaScript","status":true},{"name":"Try JSON","status":false}].

3. Using JSON.parse(), convert the newStr value back into an object and assign it to a variable named newObj.

4. Iterate through the items in the newObj and output the results to the console.
 */

let newJSONobj = [
  {
    name: "Learn Javascript",
    status: "true",
  },
  {
    name: "Try JSON",
    status: "false",
  },
];

let newStr = JSON.stringify(newJSONobj);
console.log(newJSONobj);

let newObj = JSON.parse(newStr);
// iterate through the items
newObj.forEach((el) => {
  console.log(el);
});
