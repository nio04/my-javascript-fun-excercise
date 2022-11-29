const input = 'hriditaa';
const toArr = Array.from(input)
const getlength = input.length;
const even = getlength % 2 == 0;
const getMiddlePosEven = (getlength / 2) - 1;
const getMiddlePosOdd = Math.round(getlength / 2);
console.log(`input: ${input}. length: ${getlength}`)
if (even) {
  console.log(toArr.slice(getMiddlePosEven, getMiddlePosEven + 2).join().replaceAll(',', ''))
} else {
console.log(toArr.slice(getMiddlePosOdd, getMiddlePosOdd + 1).toString())
}
