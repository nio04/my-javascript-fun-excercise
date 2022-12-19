const test = ["1", "5", "0"];

const slice = test.slice(-1);

const sliceToNum = Number(slice);

if (sliceToNum == 0) {
  const getLastTwoNum = test.slice(-2, -1);
  console.log(getLastTwoNum)
}
