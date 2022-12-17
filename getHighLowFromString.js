const input = '1 2 3 0 5 10';
const split = input.split(' ');

const max = split.sort((a, b) => b - a);
console.log(max[0])
const low = split.sort((a, b) => a - b);
console.log(low[0])
