function disemvowel(str) {
  return str;
}
let input = "yuck! this video sucks";
let toArr = input.split("");
const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < toArr.length; i += 1) {
  for (j = 0; j < vowels.length; j += 1) {
    if (toArr[i] === vowels[j]) {
      toArr[i] = ''
    }
  }
}
const toString = toArr.toString();
const replaceComma = toString.replaceAll(',', '');
console.log(replaceComma)
