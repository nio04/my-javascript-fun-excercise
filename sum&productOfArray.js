const input = [1, 2, 3, 4, 5, 6];
const sum = input.reduce(function (acc, curr) {
  return acc + curr;
})
const product = input.reduce(function (acc, curr) {
  return acc * curr
})
console.log(sum)
console.log(product)
