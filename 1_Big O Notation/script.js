// Sol 1 - Adding numbers upto n

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
