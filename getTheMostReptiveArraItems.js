const input = [
  5,
  5,
  5,
  5,
  5,
  "c",
  "c",
  "c",
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
];

let storeFirst = 0;
const testObj = {};
for (let i = 0; i < input.length; i += 1) {
  for (let j = 0; j < input.length; j += 1) {
    if (input[i] == input[j]) {
      storeFirst += 1;
    }
  }
  testObj[input[i]] = storeFirst;
  storeFirst = 0;
}

console.log(testObj);

let storeAllRepeat = [];
for (let i = 0; i < input.length; i += 1) {
  let temp = 0;
  for (let j = 0; j < input.length; j += 1) {
    if (input[i] == input[j]) {
      temp += 1;
    }
  }
  storeAllRepeat.push(temp);
  temp = 0;
}

const sort = storeAllRepeat.sort((a, b) => b - a);

const highRepeat = sort[0];
for (let i in testObj) {
  if (testObj[i] == highRepeat) {
    console.log(i, 'repeat for', highRepeat)
  }
}

