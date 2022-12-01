const first = "xyaabbbccccdefww";
const second = "xxxxyyyyabklmopq";
let storeFirst = [];
let storeSecond = [];
for (let i = 0; i < first.length; i += 1) {
  if (!storeFirst.includes(first[i])) storeFirst.push(first[i]);
}
for (let i = 0; i < second.length; i += 1) {
  if (!storeSecond.includes(second[i])) storeSecond.push(second[i]);
}
const storeFinal = storeFirst.concat(storeSecond);
let storeUltimate = [];
for (let i = 0; i < storeFinal.length; i += 1){
  if (!storeUltimate.includes(storeFinal[i])) storeUltimate.push(storeFinal[i])
}
const toString = storeUltimate.sort().toString().replaceAll(',', '');

console.log(toString)
