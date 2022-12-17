const first = 500;
const second = 600;
const third = 100;

const firstString = first.toString();
const secondString = second.toString();
const thirdString = third.toString();

const firstArray = Array.from(firstString);
const secondArray = Array.from(secondString);
const thirdArray = Array.from(thirdString);

const firstGetLast = firstArray.slice(-1).toString();
const secondGetLast = secondArray.slice(-1).toString();
const thirdGetLast = thirdArray.slice(-1).toString();

if (
  firstGetLast == secondGetLast &&
  firstGetLast == thirdGetLast &&
  secondGetLast == thirdGetLast
) {
  console.log("got matched");
} else {
  console.log("did not got matched");
}
