const input = "2932";
const toArr = Array.from(input);
let random = Math.random();

const generatePerRandom = () => {
  for (let i = 0; i < 5; i += 1) {
    return Math.trunc(random * 4);
  }
};

const getNums = (arr) => {
  let copyArr = arr;
  let storeRes = [];
  let first = "";
  let second = "";
  let third = "";
  let forth = "";

  for (let i = 0; i < 4; i += 1) {
    storeRes.push(copyArr[generatePerRandom()]);
    if (storeRes.length < 4) {

    }
    // if (storeRes.length < 4) {
    // storeRes.push(arr[generatePerRandom()+1 ]);
    // first += arr[generatePerRandom()];
    // }
    // if (second <= 0) {
    //   second += arr[generatePerRandom()];
    // }
    // if (third <= 0) {
    //   third += arr[generatePerRandom()];
    // }
    // if (forth <= 0) {
    //   forth += arr[generatePerRandom()];
    // }
    // !const input = "2932";
    console.log(generatePerRandom(), 'randomNumber', i+1);
    console.log(arr[generatePerRandom()], 'array value', i+1);
    console.log((storeRes[i]), 'show--StoreResult', i+1);
    // if (storeRes.length > 4 ) {
    copyArr.splice(copyArr.indexOf(storeRes[i]), 1);
    console.log(copyArr, i+1)
    // }
  }
  // if (first > 0) {
  //   copyArr.splice(copyArr.indexOf(first), 1);
  // }
  // if (second > 0) {
  //   copyArr.splice(copyArr.indexOf(second), 1);
  // }
  // if (third > 0) {
  //   copyArr.splice(copyArr.indexOf(third), 1);
  // }
  // if (forth > 0) {
  //   copyArr.splice(copyArr.indexOf(forth), 1);
  // }
  return `${copyArr}, 1: ${first} 2: ${second} 3: ${third} 4: ${forth}, final: ${storeRes}`;
};
console.log(getNums(toArr));
