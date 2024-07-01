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

// without recursion
/*
function factorial(num) {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }

  return res;
}

console.log(factorial(5));
*/

// with recursion
/*
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));
*/

let res = 1;
function factorial(num) {
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
}

console.log(factorial(5));
