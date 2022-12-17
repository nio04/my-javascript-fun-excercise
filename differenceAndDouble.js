//  ! 25 done from "basic"
const input = "javascript";
const arr = Array.from(input);
const copyArr = arr.slice();

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] == "s") {
    if (i == 4) {
      for (let j = 4; j < copyArr.length; j += 1) {
        arr.splice(arr.indexOf(arr[j]), 1);
      }
    }
  }
}
const string = arr.toString().replaceAll(",", "");
console.log(string);
