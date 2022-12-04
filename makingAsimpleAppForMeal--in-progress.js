const fciStoreMealDays = {
  name: "BangaBandhu Hall",
  storeDays: [],
  addImpInfo(name, id, gender, days, month, year) {
    const tempObject = {};
    const [...extractDays] = days;
    tempObject.name = name;
    tempObject.id = id;
    tempObject.gender = gender;
    tempObject.days = extractDays;
    tempObject.month = month;
    tempObject.year = year;
    this.storeDays.push(tempObject);
  },
  showInfo(name, id) {
    let gender = "";
    let days = "";
    let month = "";
    let year = "";
    for (let i of this.storeDays) {
      gender += `${i.gender}`;
      days += ` ${i.days}`;
      month += `${i.month}`;
      year += `${i.year}`;
    }
    console.log(`welcome to ${this.name}.`);
    console.log(`your name: ${name}, id: ${id}, gender: ${gender}.`);
    console.log(`meal on for: (days) -> ${days}`);
    console.log(`meal on for (month) -> ${this.fixMonth()}, year: ${year}`);
  },
  fixMonth() {
    let getMonth = Number("");
    let fixedMonth = "";
    for (let i of this.storeDays) {
      getMonth += i.month;
    }
    switch (getMonth) {
      case 1:
        fixedMonth += "january";
        break;
      case 2:
        fixedMonth += "february";
        break;
      case 3:
        fixedMonth += "march";
        break;
      case 4:
        fixedMonth += "april";
        break;
      case 5:
        fixedMonth += "may";
        break;
      case 6:
        fixedMonth += "june";
        break;
      case 7:
        fixedMonth += "july";
        break;
      case 8:
        fixedMonth += "auguest";
        break;
      case 9:
        fixedMonth += "sepetember";
        break;
      case 10:
        fixedMonth += "october";
        break;
      case 11:
        fixedMonth += "november";
        break;
      case 12:
        fixedMonth += "december";
        break;
    }
    return fixedMonth;
  },
  deleteDays(id, days) {
    let storeMainDay = [];
    // ! store main days in another array
    for (let i of this.storeDays) {
      storeMainDay.push(...i.days);
    }
    // ! finding id
    for (let i of this.storeDays) {
      if (i.id == id) {
        for (let j = 0; j < storeMainDay.length; j += 1) {
          for (let k = 0; k < days.length; k += 1) {
            if (storeMainDay[j] == days[k]) {
              storeMainDay.splice(storeMainDay.indexOf(days[k]), 1);
            }
          }
        }
      }
    }
    for (let i of this.storeDays) {
      if (i.days) {
        return (i.days = storeMainDay);
      }
    }
  },
};

fciStoreMealDays.addImpInfo(
  "jibon",
  1600,
  "male",
  [5, 6, 7, 8, 9, 10],
  12,
  2022
);
// fciStoreMealDays.addImpInfo("nishat", 1604, "male", [5, 6], 12, 2022);
// fciStoreMealDays.addImpInfo(
//   "rasik",
//   1609,
//   "male",
//   [5, 6, 7, 8, 9, 10],
//   12,
//   2022
// );
// fciStoreMealDays.showInfo("jibon", 1600);
fciStoreMealDays.deleteDays(1600, [7, 8, 9]);
fciStoreMealDays.showInfo("jibon", 1600);
