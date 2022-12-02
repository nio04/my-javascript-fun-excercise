const first = [121, 144, 19, 161, 19, 144, 19, 11];
let second = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
let storeResult = [];
let storeValidity = [];
for (let i of first) storeResult.push(i * i);

for (let i = 0; i < storeResult.length; i += 1) {
  if (storeResult.includes(second[i])) {
    second[i] += '9999'
    storeValidity.push("valid");
  } else {
    storeValidity.push("invalid");
  }
}
const checkOutput = storeValidity.includes('invalid');
const printOutput = !checkOutput ? console.log('valid') : console.log('invalid')
