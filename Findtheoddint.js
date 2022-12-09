const input = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
for (let i = 0; i < input.length; i += 1) {
  const splice = Number(input.splice(input[i], 1));
  if (input.indexOf(splice) < 0) {
    console.log(input[i]);
  }
}
