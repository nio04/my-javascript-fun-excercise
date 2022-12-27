const jonasArray = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Siam", "nobody"],
  hasDriverLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  summery: function () {
    return `${jonasArray.firstName} is a ${jonasArray.calcAge()} years old ${
      jonasArray.job
    } and he ${
      jonasArray.hasDriverLicense ? "have" : "doesnt have"
    } a driver license`;
  },
};
console.log(
  `${jonasArray.firstName} has ${jonasArray.friends.length} friends and his best friend called ${jonasArray.friends[0]}`
);

console.log(jonasArray.summery());
