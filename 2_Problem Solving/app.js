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
