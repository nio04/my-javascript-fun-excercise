const returnElInFormatted = (input) => {
  const first = Array.from(input);
  const second = Array.from(input);
  const convertFirst = first.toString();
  const convertSecond = second.join('+')
  return `${convertFirst} --- ${convertSecond}`
};

console.log(returnElInFormatted(["Red", "Green", "White", "Black"]));
