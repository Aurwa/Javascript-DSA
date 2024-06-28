// Write a function which takes in a string and returns counts of each character in the string

let charCount = {};

function countChar(str) {
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

console.log(countChar("Hello"));

// let pName = "name";
// const obj = {
//   name: "Aurwa",
//   pass: 123,
// };

// console.log(obj[pName]);
