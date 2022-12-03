//  A <-> T   &&   C  <--> G
const input = "ATTGC";
const toArr = Array.from(input);
let store = [];

for (let i = 0; i < toArr.length; i += 1){
  if (toArr[i] == "A") {
    store.push('T')
  } else if (toArr[i] == "T") {
    store.push('A')
  } else if (toArr[i] == 'C') {
    store.push('G')
  } else if (toArr[i] == 'G') {
    store.push('C')
  }
}
const string = store.toString();
const finalResult = string.replaceAll(',', '')
console.log(finalResult)
