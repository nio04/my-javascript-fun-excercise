const input = 'The Quick Brown Fox';
const toArr = Array.from(input);
let store = []

for (let i = 0; i < input.length; i += 1){
  if (input[i] > 'A' && input[i] < 'Z') {
    store.push(input[i].toLowerCase())
  } else if (input[i] > 'a' && input[i] < 'z') {
    store.push(input[i].toUpperCase());
  } else {
    store.push(' ')
  }
}

const toString = store.toString().replaceAll(',', '')
console.log(toString)
