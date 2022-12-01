const smiley = [":)", ";(", ";}", ":-D"];
const smileyEyes = [":", ";"];
const smileyNose = ["-", "~"];
const smileyMouth = [")", "D"];

const mapCaseCheck = smiley.map((curr) => {
  const firstCheck = curr[0] == smileyEyes[0] || curr[0] == smileyEyes[1];
  const secondCheck = curr[1] == smileyNose[0] || curr[1] == smileyNose[1];
  const thirdCheck = curr[2] == smileyMouth[0] || curr[2] == smileyMouth[1];
  return `${firstCheck}, ${secondCheck}, ${thirdCheck}`

});
console.log(mapCaseCheck)
for (let i = 0; i < mapCaseCheck.length; i += 1){
  if (mapCaseCheck[i].search('false') < 1) {
    console.log(`valid emoji is ${smiley[i]}`)
  }
}
