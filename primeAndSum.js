const max = 30;
let storePrime = [];
let flags = false;

for (let i = 2; i <= max; i += 1) {
  for (let j = i - 1; j >= 2; j -= 1) {
    if (i % j == 0) {
      flags = true;
    }
  }
  if (!flags) storePrime.push(i);
  flags = false;
}
const reduce = storePrime.reduce((acc, curr) => acc + curr);
console.log(
  `prime range 2 to ${max} and the prime list are -> ${storePrime} and their sum: ${reduce}`
);
