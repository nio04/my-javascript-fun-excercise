const test = ["9", "3", "2"];

const rando = () => {
  return Math.trunc(Math.random() * 3);
};

let store = [];

store.push(rando());
store.push(rando());
store.push(rando());


for (let i = 0; i < 5; i += 1) {
  console.log(store[i])
  if (store[i + 1] === store[i]) {
    console.log('test', store[i + 1], store[i])
    while (store[i + 1] !== store[i]) {
      store[i] = rando()
    }
  }
}

console.log(store);
