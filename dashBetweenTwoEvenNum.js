//  0-254-6-8

const dashBetweenEven = (input) => {
  const toArr = Array.from(input);
  let storeResult = [];
  for (let i = 0; i < toArr.length; i += 1) {
    if (Number(toArr[i]) % 2 == 0 && Number(toArr[i + 1] % 2 == 0)) {
      storeResult.push(toArr[i], "-");
    } else {
      storeResult.push(toArr[i]);
    }
  }
  return storeResult.toString().replaceAll(',', '')
};

console.log(dashBetweenEven("025468"));
