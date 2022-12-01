//! will only accept 5 parameter
const smiley = [":0)", ";(", ";}", ":-D"];
const [firstCase, secondCase, thirdCase, forthCase, fifthCase] = smiley;
const smileyEyes = [":", ";"];
const smileyNose = ["-", "~"];
const smileyMouth = [")", "D"];
let store = [];
const matchKey = ["eyes matched", "nose matched", "mouth matched"];

for (let i = 0; i <= firstCase.length; i += 1) {
  if (firstCase[i] == smileyEyes[i]) {
    store.push("eyes matched");
  }
  if (firstCase[i] == smileyNose[i]) {
    store.push("nose matched");
  }
  if (firstCase[i] == smileyMouth[i]) {
    store.push("mouth matched");
  }
}

const map = store.map((curr) => {
  for (let i of matchKey) if (i == curr) return "";
});
const string = map.toString();
const replace = string.replaceAll(",", "");
if (replace.length == 0) {
  console.log("valid emoji");
} else {
  console.log('non-valid emoji')
}
