import { PI, add, subtract } from "./math.js";
import greet from "./greet.js";
import "./user.js";

console.log(PI);
console.log(add(5, 8));
console.log(subtract(45, 38));

console.log(greet("Ebube"));

fetch("./user.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.name);
    console.log(data.age);
  });
