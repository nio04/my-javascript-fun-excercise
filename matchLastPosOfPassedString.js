const input = ["nishat", "hat"]; // tahsin  - tah
const first = input[0];
const second = input[1];
let storeFirst = [];
let storeSecond = [];
// ! reverse first
for (let i = first.length - 1; i >= 0; i -= 1) {
  storeFirst.push(first[i]);
}
// ! reverse second
for (let i = second.length - 1; i >= 0; i -= 1) {
  storeSecond.push(second[i]);
}
let flags = false;
for (let i = 0; i < storeSecond.length; i += 1) {
  if (storeSecond[i] != storeFirst[i]) {
    break;
  } else {
    flags = true;
  }
}
flags == true ? console.log("valid") : console.log("non-valid");
