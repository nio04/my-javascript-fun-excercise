const input = 'nishat islam';
const toArr = Array.from(input);
let storeResult = [];

for (let i = 0; i < toArr.length; i += 1){
  if (i % 2 == 0) {
    storeResult.push(toArr[i].toUpperCase());
  }
  else if (i == ' ') {
    storeResult.push(' ');
  }else{
    storeResult.push(toArr[i].toLocaleLowerCase());
  }
}
const string = storeResult.toString().replaceAll(',', '');
console.log(string)
