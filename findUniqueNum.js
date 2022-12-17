/*
1. if the first number is unique [done]
2. if the second number is unique [done]

*/

const input = [17, 17, 3, 17, 17, 17, 17];
const getFirst = input[0];
const getSecond = input[1];
const storeTest = [];

for (let i of input) {
  if (getFirst != i) {
    storeTest.push(i); //* when the first input iz unique
  }
  // * when the unique number is not in first
  if (getFirst == getSecond) {
    for (let i = 0; i < input.length; i += 1){
      input.splice(input.indexOf(getFirst), 1)
    }
  }
}
if (storeTest.length > 1) console.log(getFirst)
if(getFirst == getSecond) console.log(Number(input));
