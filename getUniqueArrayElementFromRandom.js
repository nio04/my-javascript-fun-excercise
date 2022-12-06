const random = () => Math.trunc(Math.random() * 10 + 1);
let store = [];
for (let i = 1; i <= 10; i += 1) {
  store.push(random());
}
console.log(`main array: ${store}`);
let storeUnique = [];
for (let i = 0; i < store.length; i += 1) {
  for (let j = store.length; j > i; j -= 1) {
    if (store[i] == store[j]) {
      store.splice(store.lastIndexOf(store[j]), 1);
    }
  }
}
console.log(`unique array elementstore from main array: ${store}`);
