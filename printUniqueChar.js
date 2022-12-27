/*
instruction:

as input: "AAAABBBCCDAABBB"
output should be -> ['A', 'B', 'C', 'D', 'A', 'B']
*/

const input = "AAAABBBCCDAABBB";
const inputCopy = input.slice();
const toArr = Array.from(input);
let store = [];

for (let i = 0; i < inputCopy.length; i += 1) {
  if (toArr[i] === toArr[i + 1]) {
    if (store[i - 1] !== toArr[i]) {
      store.push(toArr[i]);
    }
    toArr.splice(toArr.indexOf(toArr[i]), 1);
  } else {
    if (
      toArr[i] !== toArr[i + 1] &&
      toArr[i] !== toArr[i - 1]
    ) {
      store.push(toArr[i]);
    }
  }
}
console.log(store);
