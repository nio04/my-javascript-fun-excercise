const input = "2932";
const arr = Array.from(input);
const [first, second, third, forth] = arr;
const arrForNum = [
  first + second,
  first + third,
  second + first,
  second + second,
  second + third,
  second + forth,
  third + first,
  third + second,
  third + third,
  third + forth,
  forth + second,
  forth + third,
];
let stoereResult = [];
for (let i = 0; i < arrForNum.length - 1; i += 1) {
  console.log(
    `${arrForNum[i]} + ${arrForNum[i + 1]} --res: ${
      Number(arrForNum[i]) + Number(arrForNum[i + 1])
    }`
  );
  stoereResult.push(Number(arrForNum[i]) + Number(arrForNum[i + 1]));
}

let max = stoereResult[0];
for (let i of stoereResult) {
  if(i < max) max = i
}
console.log(max)
