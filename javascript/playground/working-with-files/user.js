const obj = {
  name: "Sam Keller",
  age: 20,
  isOnline: false,
  hobbies: ["singing", "dancing"],
  address: {
    street: "123 Chi Drive",
    postalCode: 60001,
  },
};

const objInJson = `{
    "name": "Sam Brandy",
    "age": 23,
    "isOnline": false,
    "hobbies": ["singing", "dancing"],
    "address": {
        "street": "123 Chi Drive",
        "postalCode": 60001
}`;

// coverting objects to JSON string using JSON.stringify()
const objJSONString = JSON.stringify(obj);
console.log(objJSONString);
