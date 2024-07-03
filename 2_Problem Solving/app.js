// 1. Write a function which takes in a string and returns counts of each character in the string.

/*
function charCount(str) {
  let charObj = {};
  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  return charObj;
}

console.log(charCount("hello"));
*/

// --------- Frequency Pattern ----------

// 1. Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's correspoding value squared in the second array. The frequency of values must be same.

// Method 1 : O(n^2)
/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let trueIndex = arr2.indexOf(arr1[i] ** 2);
    if (trueIndex === -1) {
      return false;
    }

    arr2.splice(trueIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));
*/

// Method 2 :
/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqObjOne = {};
  let freqObjTwo = {};

  // freqObj1
  for (let val of arr1) {
    if (freqObjOne[val]) {
      freqObjOne[val]++;
    } else {
      freqObjOne[val] = 1;
    }
  }

  // freqObj2
  for (let val of arr2) {
    if (freqObjTwo[val]) {
      freqObjTwo[val]++;
    } else {
      freqObjTwo[val] = 1;
    }
  }

  for (let key in freqObjOne) {
    // checking existence
    if (freqObjTwo[key ** 2] === undefined) {
      return false;
    }

    // checking frequency
    if (freqObjTwo[key ** 2] !== freqObjOne[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 5], [9, 1, 4, 25]));
*/

// Anagram function

// Method 1 ---- O(nlogn)
/*
function trueAnagram(str1, str2) {
  let s1 = str1.length;
  let s2 = str2.length;

  if (s1 !== s2) {
    return false;
  }
  let sotrtedArr1 = str1.split("").sort();
  let sortedArr2 = str2.split("").sort();

  for (let i = 0; i < sotrtedArr1.length; i++) {
    if (sotrtedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(trueAnagram("cinema", "iceman"));
*/

// Method 2
/*
function trueAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let objOne = {};
  for (let char of str1) {
    if (objOne[char]) {
      objOne[char]++;
    } else {
      objOne[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!objOne[letter]) {
      return false;
    } else {
      objOne[letter] -= 1;
    }
  }
  return true;
}

console.log(trueAnagram("cinema", "iceman"));
*/

// --------- Multiple Pointers ----------

// 1. Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn’t exist.

// method 1
/*
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-2, 0, 1, 2, 3]));
*/

// method 2
/*
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(sumZero([-2, -1, 0, 1, 2, 3]));
*/

// 2. Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.

// method 1
/*
function countUniqueValues(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr.length;
}

console.log(countUniqueValues([1, 1, 1, 2]));
*/

// method 2
/*
// function countUniqueValues(arr) {
//   let left = 0;
//   let right = 1;
//   let newArr = [];
//   while (left < arr.length) {
//     if (arr[left] !== arr[right]) {
//       newArr.push(arr[left]);
//     }
//     left++;
//     right++;
//   }
//   return newArr.length;
// }

// console.log(countUniqueValues([1, 1, 1, 2]));

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

// method 3
/*
function uniqueCount(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(uniqueCount([1, 2, 2, 3]));
*/

// -------- Sliding Window Pattern -----

// 1. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
/*
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return false;
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
*/

// --------- Optional Challenges ---------

// // ====== Frequency Counter ======= // //

// 1. (sameFrequency)

// Write a function called sameFrequency. Given two positive intergers, find out if the two numbers have the same frequency of digits.

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false

// method 1 -- without frequency counter
/*
function sameFrequency(num1, num2) {
  let arrNum1 = Array.from(String(num1), Number);

  let arrNum2 = Array.from(String(num2), Number);

  if (arrNum1.length !== arrNum2.length) {
    return false;
  }

  for (let i = 0; i < arrNum1.length; i++) {
    let trueIndex = arrNum2.indexOf(arrNum1[i]);
    if (trueIndex === -1) {
      return false;
    }

    arrNum2.splice(trueIndex, 1);
  }
  return true;
}

console.log(sameFrequency(221, 122));
*/

// method 2 - with frequency counter
/*
function sameFrequency(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let char of str1) {
    if (obj1[char]) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }

  for (let char of str2) {
    if (obj2[char]) {
      obj2[char]++;
    } else {
      obj2[char] = 1;
    }
  }

  for (let key in obj1) {
    if (!obj2[key]) {
      return false;
    }

    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(1822, 2811));
*/

// ---- takng 1 obj
/*
function sameFrequency(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};

  for (let char of str1) {
    if (obj1[char]) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }

  // for (let i = 0; i < str2.length; i++) {
  //   let num = str2[i];
  //   if (!obj1[num]) {
  //     return false;
  //   } else {
  //     obj1[num]--;
  //   }
  // }

  for (let val of str2) {
    if (!obj1[val]) {
      return false;
    } else {
      obj1[val]--;
    }
  }
  return true;
}

console.log(sameFrequency(44, 14));
*/

// 2. areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true

/*
function areThereDuplicates(...args) {
  let obj = {};
  for (let val of args) {
    if (obj[val]) {
      return true;
    } else {
      obj[val] = 1;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 2));
*/

// // ====== Multiple Pointers ======= // //

// 1. areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true

/*
function areThereDuplicates(...args) {
  let sortedArgs = args.sort();
  let left = 0;
  let right = 1;

  while (left < args.length) {
    if (sortedArgs[left] === sortedArgs[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c", "b"));
*/

// 2. aveargePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// averagePair([1, 2, 3], 2.5); ==> true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); ==> true

/*
function averagePair(arr, targetAvg) {
  let targetSum = targetAvg * 2;
  console.log(targetSum);
  let left = 0;
  let right = arr.length - 1;
  while (left < arr.length) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return true;
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// Since the array is sorted in ascending order:

// Incrementing the left pointer moves to a larger value, which will increase the currentSum.

// Decrementing the right pointer moves to a smaller value, which will decrease the currentSum.
*/

// 3. isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// isSubsequence('hello', 'hello world'); ==> true
// isSubsequence('sing', 'sting'); ==> true
// isSubsequence('abc', 'acb'); ==> false (order matters)

/*
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }

    j++;
  }
  return false;
}

console.log(isSubsequence("sing", "sting"));
*/

/*
// practice
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i === str1.length) {
      return true;
    }

    j++;
  }
  return false;
}

console.log(isSubsequence("abc", "acb"));
*/

// // ======= Sliding Window ======== // //

// 1. maxSubArray
/*
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return false;
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));

// When moving the window one element to the right:

// Subtract the element that is no longer in the window (arr[i - n]).
// Add the new element that enters the window (arr[i]).
*/

// minSubArrayLen

// 2. Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn’t one, return 0 instead.

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); ==> 2 -> because [4, 3] is the smallest subarray

/*
function minSubArrayLen(arr, num) {
  let minLength = Infinity;
  let start = 0;
  let end = 0;
  let tempSum = 0;

  while (end < arr.length) {
    tempSum += arr[end];

    while (tempSum >= num) {
      minLength = Math.min(minLength, end - start + 1);
      tempSum -= arr[start];
      // Move the start pointer to the right
      start++;
    }
    // Move the end pointer to the right
    end++;
  }

  // If minLength was updated, return it, otherwise return 0
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // Output: 2
*/

let start = 0;
let end = 0;
let sum = 0;
let minLength = Infinity;

function minSubArrayLen(arr, num) {
  while (end < arr.length) {
    sum += arr[end];

    while (sum >= num) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= arr[start];
      start++;
    }

    end++;
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
