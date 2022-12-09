const targetFirst = 3;
const targetSecond = 5;
let store = [];

const multiplicity = input => {
  for (let i = 1; i < 5; i += 1) {
    if (input * i < 10) {
      store.push(input * i);
    }
}
}
multiplicity(targetFirst);
multiplicity(targetSecond);

const reduce = store.reduce((acc, curr) =>  acc + curr)
console.log(reduce)
