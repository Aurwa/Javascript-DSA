// Function 1
/*
// with recursion
function countDown(num) {
  if (num <= 0) {
    console.log("All done.");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// without recursion
// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All done.");
// }

// countDown(5);
*/

// Function 2
/*
function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
*/

// Function 3 -- factorial
/*
// without recursion

function factorial(num) {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }

  return res;
}

console.log(factorial(5));


// with recursion

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));
*/

// Function 4 --- countOddValues
/*
//  helper recursive way
function countOddValues(arr) {
  let res = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      res.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return res;
}

console.log(countOddValues([1, 2, 3, 4, 5, 6]));

// countOddValues --- pure recursive way

function countOddValues(arr) {
  let res = [];

  if (arr.length === 0) {
    return res;
  }

  if (arr[0] % 2 !== 0) {
    res.push(arr[0]);
  }

  res = res.concat(countOddValues(arr.slice(1)));
  return res;
}

console.log(countOddValues([1, 2, 3, 4, 5, 6, 7]));
*/

////////////////////////////////////////////////
// // ----- Recursion Practice Set ----- // //

// Question 1 --- power(n, x)
/*
// ----- without recursion
let res = 1;
function power(base, expo) {
  for (let i = 0; i < expo; i++) {
    res *= base;
  }
  return res;
}

// console.log(power(5, 2));

// ------ with recursion

function power2(base, expo) {
  if (expo === 0) return 1;
  if (expo === 1) return base;

  if (expo > 0) {
    return base * power2(base, expo - 1);
  }
}

console.log(power2(5, 2));
*/

// Question 2 --- factorial
/*
function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(4));
*/

// Question 3 --- productOfArray
/*
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4]));
*/

// Question 4 --- recursive range
/*
function recursiveRange(num) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
*/

// Question 5 --- fibonacci seq
// --- without recursion

let n1 = 0;
let n2 = 1;
let res;
function fibonacci(n) {
  console.log(n1);
  console.log(n2);
  for (let i = 1; i < n; i++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
    console.log(res);
  }
}

// console.log(fibonacci(7));

let num1 = 0;
let num2 = 1;
let fn;
// console.log(num1);
// console.log(num2);
function fibonacci2(n) {
  if (n === 0) return;
  fn = num1 + num2;
  num1 = num2;
  num2 = fn;
  console.log(fn);
  return fibonacci2(n - 1);
}

// fibonacci2(7);

// ------ with recursion
function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));
