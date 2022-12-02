const input = "How can mirrors be real if our eyes aren't real";
const split = input.split(" ");
const copy = split;
let storeResult = []
const holdAllCaps = split.map((curr) => {
  return curr[0].toUpperCase();
});

// ! replace first character with 'holdCap' variable
for (let i = 0; i < copy.length; i += 1){
  const string = copy[i]
  storeResult.push(string.replace(string[0], holdAllCaps[i]))
}
const string = storeResult.toString();
const mainString = string.replaceAll(',', ' ')
console.log(mainString)
