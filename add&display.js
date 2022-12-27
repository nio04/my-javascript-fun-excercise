import ps from "prompt-sync";

const prompt = ps();

console.log('to stop looping, please input -> 159');
let storeArray = [];

let userInput = 0;

const closeLoop = 159;

while (closeLoop !== userInput) {
  const input = prompt("enter a integer: ");
  console.log('You have entered: ', input);
  storeArray.push(Number(input))
  userInput = Number(input);
}
const sum = arg => {
  arg.pop();
  return arg.reduce((acc, curr) => acc + curr);
}
console.log(sum(storeArray));
