const input = "0.0.0.0.0";
const toArr = input.split(".");

const validityOfIPv4 = (num) => {
  const filter = num.filter((el) => {
    return el >= 0 && el <= 255;
  });
  if (num.length < 4 || num.length > 4 || filter.length < 4) return "false";
  return "true";
};

console.log(validityOfIPv4(toArr));
