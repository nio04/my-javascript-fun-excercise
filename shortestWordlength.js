const input = 'hello! i am from bangladesh';
const split = input.split(' ');
let min = split[0].length;

for (let i = 0; i < split.length; i += 1){
  if (min > split[i].length) {
    min = split[i]
  }
}
console.log(min)
