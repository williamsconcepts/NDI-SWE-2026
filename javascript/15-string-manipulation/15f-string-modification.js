const text = "Javascript";

const extract = text.slice(0, 4);
const scriptText = text.slice(4, 10);

console.log(extract);
console.log(scriptText);

const anotherText = "carpet";

const anotherExtract = anotherText.substring(0, 3);
const petString = anotherText.substring(0, 3);
// const negAnotherString = anotherText(-3);

console.log(anotherExtract);
console.log(petString);

const sentence = "I love javascript";
const newSentence = sentence.replace("love", "enjoy");

console.log(newSentence);

const longsentence = "I love javascript, and i love coding";
const newLongSentence = longsentence.replaceAll("love", "enjoy");
console.log(newLongSentence);
