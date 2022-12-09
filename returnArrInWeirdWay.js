const gettingFirstArrElByValidArg = (arr, input) => {
  if (input == undefined) return arr[0];
  if (arr.length == 0 || input < 0) return [];
  if (input < arr.length) {
    return arr.slice(0, input);
  }
  if(input > arr.length) return arr
};
console.log(gettingFirstArrElByValidArg([7, 9, 0, -2], 6));
