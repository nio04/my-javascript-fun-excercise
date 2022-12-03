const input = [1, 10];
const sortMin = input.sort((a, b) => a - b);
const minProfit = sortMin[0]
const sortMax = input.sort((a, b) => b - a);
const maxProfit = sortMax[0]
console.log([minProfit, maxProfit])
