const firstInput = "nishat";
const secondInput = "hridita";
const thirdInput = "neha";
const firstInputCheck = Array.from(firstInput);
let storeFirstInputResult = [];
const secondInputCheck = Array.from(secondInput);
let storeSecondInputResult = [];
const thirdInputCheck = Array.from(thirdInput);
let storeThirdInputResult = [];
const allAlphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const getResult = (input, storeArr) => {
  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < allAlphabets.length; j += 1) {
      if (input[i] == allAlphabets[j]) {
        storeArr.push(j + 1);
      }
    }
  }
  return storeArr;
};
getResult(firstInput, storeFirstInputResult);
getResult(secondInput, storeSecondInputResult);
getResult(thirdInput, storeThirdInputResult);

const redudceFirstInput = storeFirstInputResult.reduce(
  (acc, curr) => acc + curr
);
const redudceSecondInput = storeSecondInputResult.reduce(
  (acc, curr) => acc + curr
);
const redudceThirdInput = storeThirdInputResult.reduce(
  (acc, curr) => acc + curr
);

if (
  redudceFirstInput > redudceSecondInput &&
  redudceFirstInput > redudceThirdInput
) {
  console.log(`winner: ${firstInput} with length of ${redudceFirstInput}`);
}
if (
  redudceSecondInput > redudceFirstInput &&
  redudceSecondInput > redudceThirdInput
) {
  console.log(`winner: ${secondInput} with length of ${redudceSecondInput}`);
}
if (
  redudceThirdInput > redudceFirstInput &&
  redudceThirdInput > redudceSecondInput
) {
  console.log(`winner: ${thirdInput} with length of ${redudceThirdInput}`);
}
