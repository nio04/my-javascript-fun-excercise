const names = ["abu", "habu", "babu"];
const input =
  "Hello! my name is abu i love habu and my other friend name is babu";
let split = input.split(" ");
for (let i = 0; i < names.length; i += 1) {
  for (let j = 0; j < input.length; j += 1) {
    if (names[i] == split[j]) {
      split[j] = split[j].toUpperCase();
    }
  }
}

for (let i = 0; i < split.length; i += 1) {
  const firstName = names[0].toUpperCase();
  if (split[i] == firstName) {
    split[i] += ".";
  }
}

const arrToString = (arr) => {
  const str = arr.toString();
  return str.replaceAll(',', ' ')
};
console.log(arrToString(split))
