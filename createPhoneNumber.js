// (123) 456-7890
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const string = input.toString();
const replace = string.replaceAll(',', '')
const regex = replace.match(/\d{3}/g)
const [first, second, third] = regex;

function phoneNumberFormatter(first, second, third) {
  const firstpart = Array.from(first);
  firstpart.unshift('(');
  firstpart.push(') ');
  const firstString = firstpart.toString();
  const finalFirst = firstString.replaceAll(',', '');
  const secondPart = Array.from(second);
  secondPart.push('-')
  const secondString = secondPart.toString();
  const finalSecond = secondString.replaceAll(',', '')
  return `${finalFirst}${finalSecond}${third}`
}

console.log(phoneNumberFormatter(first, second, third))
