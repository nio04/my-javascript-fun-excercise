const input = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

const [row1, row2, row3, row4, row5] = input;
row1.unshift("row0");
row2.unshift("row1");
row3.unshift("row2");
row4.unshift("row3");
row5.unshift("row4");

const fullSet = [...row1, ...row2, ...row3, ...row4, ...row5];
fullSet.forEach(function (el) {
  if (Number(el) || el === 0) {
    console.log(el.toString());
  } else {
    console.log(el);
  }
});
