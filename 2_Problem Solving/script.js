// Write a function which takes in a string and returns counts of each character in the string

/*
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
*/

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's correspoding value squared in the second array. The frequency of values must be same.

/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // frequency counter for arr1
  for (let val of arr1) {
    if (frequencyCounter1[val] === undefined) {
      frequencyCounter1[val] = 0;
    }
    //frequencyCounter1[val] = frequencyCounter1[val] + 1;
    frequencyCounter1[val]++;
  }

  console.log(frequencyCounter1);

  // frequency counter for arr2
  for (let val of arr2) {
    if (frequencyCounter2[val] === undefined) {
      frequencyCounter2[val] = 0;
    }
    frequencyCounter2[val]++;
  }

  // Compare frequency counters
  for (let key in frequencyCounter1) {
    // Check if the square of the key exists in frequencyCounter2 (Existence Check)

    if (frequencyCounter2[key ** 2] === undefined) {
      return false;
    }

    // Check if the frequencies match (Frequency/Value check)

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

// Example usage:
let arrayOne = [1, 2, 3];
let arrayTwo = [9, 1, 4];

console.log(same(arrayOne, arrayTwo)); // true
*/

let arrayOne = [1, 2, 3, 2];
let arrayTwo = [9, 1, 4, 4];

function same(arr1, arr2) {
  // checking length
  if (arr1.length !== arr2.length) {
    return false;
  }

  let objectOne = {};
  let objectTwo = {};

  // Object 1
  for (let val of arr1) {
    if (objectOne[val] === undefined) {
      objectOne[val] = 0;
    }
    objectOne[val]++;
  }

  // Object 2
  for (let val of arr2) {
    if (objectTwo[val] === undefined) {
      objectTwo[val] = 0;
    }
    objectTwo[val]++;
  }

  // comparing frequencies
  for (let key in objectOne) {
    // existence check
    if (objectTwo[key ** 2] === undefined) {
      return false;
    }

    // frequency check
    if (objectTwo[key ** 2] !== objectOne[key]) {
      return false;
    }
  }
  return true;
}

console.log(same(arrayOne, arrayTwo));
