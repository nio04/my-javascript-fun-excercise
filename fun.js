const input = [1, 2, 1];
const match = 1;
const replace = 9;
for (let i = 0; i < input.length; i += 1) {
  if (input[i] == match) {
    input[i] = replace
  }
}
console.log(input)
