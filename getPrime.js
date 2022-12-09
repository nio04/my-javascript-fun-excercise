const getPrime = (num) => {
  let flags = true;
  if (num < 0 && num == 1) {
    return false;
  }
  if (num > 2) {
    for (let i = 2; i < num; i += 1) {
      if (num % i == 0) {
        flags = false;
        // console.log("inside if", i);
      }
    }
    return flags ? "prime" : "not prime";
  }
};
console.log(getPrime(4));
