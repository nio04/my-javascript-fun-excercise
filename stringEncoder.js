const input = "neeopn";
const toArr = Array.from(input);
let newString = '';
let showDetailMatch = [];
let showDetailNonMatch = [];
for (let i = 0; i < toArr.length; i += 1) {
  const slice = toArr.slice(i, i + 1).toString();
  const indexOf = toArr.indexOf(slice)
  let [...copyArr] = input;
  const splice = copyArr.splice(indexOf, 1).toString();
    if (copyArr.includes(splice)) {
      newString += ')';
      showDetailMatch.push(splice)
  } else {
      newString += '(';
      showDetailNonMatch.push(splice)
  }
  copyArr = input
}

console.log(`output result: match: ) ||| not match: ( ||| result: ${newString}`);
console.log(`match: ${showDetailMatch.join(' - ')} ||| non-match: ${showDetailNonMatch.join(' - ')}`)
