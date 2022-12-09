const cloneArray = input => {
  const flat = input.flat(Infinity);
  return flat.slice(0);
}
console.log(cloneArray([1, [2, 4], 0]));
