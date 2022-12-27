const bookList = { ABART: 20, CDXEF: 50, BKWRK: 25, BTSQZ: 89, DRTYM: 60 };
const getBook = ["A", "B", "C", "W"];

const storeData = [];

for (let i in bookList) {
  storeData.push(`${i[0]} : ${bookList[i]}`);
}

console.log(storeData);

const splitData = [];

for (let i of storeData) {
  splitData.push(i.split(":"));
}

const checker = function (getData, getBook) {
  // const spreadData = ...getData;
  console.log(...getData)
};

console.log(checker(splitData, getBook))
