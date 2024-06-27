// Sol 1 - Adding numbers upto n
/*
let sum = 0;
function addNum(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let t1 = performance.now();
// console.log(addNum(1000000));
addNum(1000000);
let t2 = performance.now();
console.log(`1 - Time elapsed: ${(t2 - t1) / 1000}`);

// Sol 2

function addUpto(n) {
  return (n * (n + 1)) / 2;
}

let t3 = performance.now();
addUpto(1000000);
let t4 = performance.now();
console.log(`2 - Time elapsed: ${(t3 - t4) / 1000}`);
*/

//  printBoth function
/*
function printBoth(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// printBoth(3);
*/

//  Adding numbers upto n - func
/*
// Sol 1
let sum = 0;

function addUpto(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addUpto(3));

// Sol 2

function addNum(n) {
  return (n * (n + 1)) / 2;
}

console.log(addNum(3));
*/

// Going Up Down - func
/*
function goingUpDown(n) {
  console.log("Going Up"); // O(1)
  for (let i = 1; i <= n; i++) {
    console.log(i); // O(1)
  }
  console.log("Going Down");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j); // O(1)
  }
}
goingUpDown(3);

/*
Total Operation Count:
console.log("Going Up");: 1 operation ==> O(1)
First loop (upwards counting) ==> O(n) operations
console.log("Going Down");: 1 operation ==> O(1)
Second loop (downwards counting) ==> O(n) operations
So, the total operation count for the goingUpDown function is 1 + 𝑛 + 1 + 𝑛 = 2𝑛 + 2
*/

// Print all pairs - func
/*
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(3); // O(n) operation inside of an O(n) operation ==> O(n^2)
*/

// Log atleast 5 - func
/*
function logAtleast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtleast5(10); // O(n) ==> As n grows the number of operations grow
*/

// Log atmost 5 - func
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(10); // O(1)
