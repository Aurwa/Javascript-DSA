// 1. Write a function which takes in a string and returns counts of each character in the string

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

// --------- Frequency Pattern ----------

// 2. Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's correspoding value squared in the second array. The frequency of values must be same.

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

// Practice Function 1
/*
let countObj = {}; // to keep count of characters

function countChar(str) {
  for (let char of str) {
    if (countObj[char] === undefined) {
      countObj[char] = 1;
    } else {
      countObj[char]++;
    }
  }
  return countObj;
}

// console.log(countChar("Hello"));
*/

// Practice Function 2

// const arrayOne = [1, 2, 3];
// const arrayTwo = [9, 1, 4];

// -- Method 1 -- O(n^2)
/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) { // O(1)
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { // O(n)

    let trueIndex = arr2.indexOf(arr1[i] ** 2); 
    // O(n)
    if (trueIndex === -1) {
      return false;
    }

    arr2.splice(trueIndex, 1); // O(n)
  }

  return true;
}

// console.log(same(arrayOne, arrayTwo));
*/

// -- Method 2 --
/*
function same(arr1, arr2) {
  // checking length
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqObjOne = {};
  let freqObjTwo = {};

  // Obj 1
  for (let val of arr1) {
    if (freqObjOne[val] === undefined) {
      freqObjOne[val] = 0;
    }
    freqObjOne[val]++;
  }

  // Obj 2
  for (let val of arr2) {
    if (freqObjTwo[val] === undefined) {
      freqObjTwo[val] = 0;
    }
    freqObjTwo[val]++;
  }

  for (let key in freqObjOne) {
    // existence check-- checking if obj2 has this key
    if (freqObjTwo[key ** 2] === undefined) {
      return false;
    }

    // frequncy check -- chcking if value/num of key is same in both objects
    if (freqObjTwo[key ** 2] !== freqObjOne[key]) {
      return false;
    }
  }
  return true;
}

console.log(same(arrayOne, arrayTwo));
*/

// Anagram function

// ---- Method 1 ----
/*
function areAnagram(str1, str2) {
  let s1 = str1.length;
  let s2 = str2.length;

  if (s1 !== s2) {
    return false;
  }

  const sortedArr1 = str1.split("").sort();
  const sortedArr2 = str2.split("").sort();

  // for (let i = 0; i < sortedArr1.length; i++) {
  //   if (sortedArr1[i] !== sortedArr2[i]) {
  //     return false;
  //   }
  // }

  for (const [index, char] of sortedArr1.entries()) {
    if (char !== sortedArr2[index]) {
      return false;
    }
  }

  return true;
}
// console.log(
//   areAnagram(["l", "i", "s", "t", "e", "n"], ["s", "i", "l", "e", "n", "t"])
//);

console.log(areAnagram("silent", "listen"));
*/

// --- method 2 (freq counter) ---
/*
let strOne = "cinema";
let strTwo = "iceman";

function sort(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let char of str1) {
    if (obj1[char] === undefined) {
      obj1[char] = 1;
    } else {
      obj1[char]++;
    }
  }

  for (let char of str2) {
    if (obj2[char] === undefined) {
      obj2[char] = 1;
    } else {
      obj2[char]++;
    }
  }
  console.log(obj1);
  console.log(obj2);

  for (let key in obj1) {
    // checking existence
    if (obj2[key] === undefined) {
      return false;
    }
    // checking frequency
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sort(strOne, strTwo));
*/

// --- method 3 ---
/*
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    if (lookup[letter]) {
      lookup[letter]++;
    } else {
      lookup[letter] = 1;
    }
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // if can't find letter or letter is zero
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("cinemaa", "icemann"));
*/

// --------- Multiple Pointers ----------

// 1. Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn’t exist.

// Method 1 (not the best) ==> O(n^2)
/*
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return `(${arr[i]}, ${arr[j]})`;
      }
    }
  }
}

console.log(sumZero([-2, 0, 1, 3]));
*/

// Method 2 ==> O(n)
/*
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, 0, 1, 2]));
*/

// 2. Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// --- Method 1 --- O(n)
/*
function countUniqueValues(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(countUniqueValues([1, 1, 1, 2]));
*/

// --- Method 2 --- O(n)
/*
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let uniqueCount = 1; // Start with 1 since the first element is always unique
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      uniqueCount++;
      left = right; // Move left to right
    }
    right++; // Always increment right
  }

  return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 2])); // Output: 2
*/

// --- Method 3 --- T-> O(n) S-> O(1)
/*
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return false;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] == arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2]));
*/

// -------- Sliding Window Pattern -----

// 1. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
/*
function maxSubarraySum(arr, num) {
  // Edge case: If num is greater than the length of arr, return null or handle as appropriate
  if (num > arr.length) {
    return null; // or throw an error, return 0, etc., based on requirements
  }

  let maxSum = 0;
  let tempSum = 0;

  // Calculate the sum of the first `num` elements
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Iterate through the rest of the array to find the maximum sum of `num` consecutive elements
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
*/

// ------ Divide and Conquer -----
