/*
take any integer > scramble it > for each scramble, sum it && lastly print the minimum sum
*/

const input = "293";
const toArr = Array.from(input);

let storeResult = [];

const randomGenerator = () => {
  return Math.trunc(Math.random() * 3);
};

for (let i = 0; i < input.length * 2; i += 1) {
  // console.log(`${randomGenerator()} ${randomGenerator()} ${randomGenerator()}`);
  const genrateString = toArr[randomGenerator()] + toArr[randomGenerator()] + toArr[randomGenerator()]
  storeResult.push(genrateString)
}
console.log(storeResult)
