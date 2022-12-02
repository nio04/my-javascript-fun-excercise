const input = "";
const toArr = Array.from(input);
const match = input.match(/[A-Z]/g);
let indexOf = input.indexOf(match);

if (input.length == 0) {
  console.log(`""`);
} else if (match == null || indexOf == -1) {
  console.log(input);
} else {
  toArr.splice(indexOf, 0, " ");
  const toString = toArr.toString();
  const replaceComma = toString.replaceAll(",", "");
  console.log(replaceComma);
}

