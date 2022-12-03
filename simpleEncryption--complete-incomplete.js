const input = ["012345", 2];
const string = input[0];
const toArr = Array.from(string);
let storeOdd = [];
let storeEven = [];
const map = toArr.map((curr, index) => {
  if (index % 2 != 0) {
    storeOdd.push(curr)
  } else {
    storeEven.push(curr)
  }
})
const newArr = storeOdd.concat(storeEven)
const finalString = newArr.toString();
const ultimateString = finalString.replaceAll(',','')
console.log(ultimateString.repeat(input[1]))


// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

// check source for completing this task
