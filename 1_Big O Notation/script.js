// Adding numbers upto n

let sum = 0;
function addNum(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addNum(6));
