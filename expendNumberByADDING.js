const input = "1200";
const inputArray = Array.from(input);

const getVeryLastDigit = inputArray.slice(-1);
const toNumVeryLastDigit = Number(getVeryLastDigit);

if (toNumVeryLastDigit != 0 && input.length == 2) {
  const inputCopy = inputArray.slice();
  const spliced = inputCopy.splice(-1);
  const leftOperand = inputCopy.concat("0").toString().replaceAll(",", "");
  console.log(`${leftOperand} + ${Number(spliced)} = ${input}`);
} else if (toNumVeryLastDigit == 0 && input.length == 2) {
  console.log(`${input} + 0 = ${input}`);
} else if (toNumVeryLastDigit != 0 && input.length > 2) {
  const inputCopy = inputArray.slice();
  const spliced = inputCopy.splice(-1);
  console.log(
    `${inputCopy
      .concat("0")
      .toString()
      .replaceAll(",", "")} + ${spliced} = ${input} `
  );
} else if (toNumVeryLastDigit == 0 && input.length > 2) {
  const inputCopy = inputArray.slice();
  const checkSecondLastDigit = inputCopy.slice(-2, -1);
  if (checkSecondLastDigit == 0) {
    console.log(`${inputCopy.toString().replaceAll(',','')} + 0 = ${input}`)
  }
}


/*
! get this kinds of format: 10 + 2 = 12 -- while input was 12
! get this kinds of format: 120 + 2 = 122 -- while input was 122
! get this kinds of format: 100 + 0 = 100 -- while input was 100

*/
