/*
1, we loop in second,
2, find matches keys from first,
3, if found, splice it
4, if not found, return
*/

const listFirst = [1, 2, 2, 2, 3, 5];
const listSecond = [2, 3, 5];

for (let i = 0; i < listSecond.length; i += 1) {
  for (let j = 0; j < listFirst.length; j += 1) {
    if (listSecond[i] == listFirst[j]) {
      listFirst.splice(listFirst.indexOf(listSecond[i]), 1);
      j -= 1;  //! check below
    }
  }
}

console.log(listFirst, "final");

// ? the most important part... cause we have to reset it, otherwise, [j] will skip the next occurance. so, to prevent that, whenever we splice anything successfully, we revert the counter by 1
