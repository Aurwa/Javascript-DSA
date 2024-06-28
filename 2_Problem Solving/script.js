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

// Method 1
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

/*
// practice of above method
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
*/

// Method 2
/*
// not the best approach to solve
// O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));

// For each value arr1[i], it calculates the square (arr1[i] ** 2) and looks for this squared value in arr2 using indexOf.

// If the squared value is not found (indexOf returns -1), the function returns false.
// If the squared value is found, it removes that value from arr2 using splice to ensure it won't be counted again.

// Existence Check:
// The indexOf method checks if the squared value of the current element in arr1 exists in arr2.
// If the squared value does not exist in arr2, the function returns false.

// Frequency Check:
// The splice method removes the squared value from arr2 once it is matched with an element in arr1. This ensures that each value is only matched once, maintaining the correct frequency.

// Combined Complexity
//The key point is understanding how these operations are nested:

// Outer Loop Runs n times.

// Inner Operations (indexOf and splice): Each of these operations is 𝑂(𝑛) , O(n).

// When analyzing nested operations, the time complexities of the inner operations are multiplied by the number of iterations of the outer loop.

// O(n) * O(n) = O(n^2) ==> Time Complexity
*/
