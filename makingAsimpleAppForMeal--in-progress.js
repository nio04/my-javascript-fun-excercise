/*
! manual for this app: its task is to -> add user for meal days, deleting meal days, show user all info
* addImpInfo: is for adding user information as -> (name, id, gender, days, month, year)
? showInfo : for showing user information as -> (name, id)
* deleteDays: for deleting existing users days as -> (id, days)
*/

const fciStoreMealDays = {
  name: "BangaBandhu Hall",
  /// returnDays(name1, name2) {
  // //  for (let i of this.storeDays) {
  //  //   if (i.name == name1 || i.name == name2) {
  //  // console.log("name found", i.days);
  //   //    console.log("name found", i.days);
  //  //   }
  //  // }
  //// },
  storeDays: [],
  // testOfStoreDays() {
  //   // for (let i of this.storeDays) {
  //   console.log(this.storeDays);
  //   // }
  // },
  addImpInfo(name, id, gender, days, month, year) {
    let tempObject = {};
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
    let months = "";
    let year = "";
    for (let i of this.storeDays) {
      if (i.days.length == 0) {
        days += `no days found`;
      }
      if (i.id == id) {
        gender += `${i.gender}`;
        days += ` ${i.days}`;
        months += `${i.month}`;
        year += `${i.year}`;
      }
    }
    console.log(`---welcome to ${this.name}---`);
    console.log(`your name: ${name}, id: ${id}, gender: ${gender}.`);
    console.log(`meal on for: (days) -> ${days}`);
    console.log(`meal on for (month) -> ${this.fixMonth(id)}, year: ${year}`);
  },
  fixMonth(id) {
    let getMonth = Number("");
    let fixedMonth = "";
    for (let i of this.storeDays) {
      if (i.id == id) {
        // console.log(i.month, "from fix month");
        getMonth += i.month;
      }
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
      if (i.id == id) {
        storeMainDay.push(...i.days);
      }
    }
    // console.log(storeMainDay, "first");
    // ! finding id
    for (let i of this.storeDays) {
      if (i.days.length == 0) {
        storeMainDay.splice(storeMainDay.indexOf(1), 1);
      }
      // ! deleting multiple days
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
    // console.log(storeMainDay, "second");
    for (let i of this.storeDays) {
      if (i.id == id) {
        // console.log(i.id, "return id from delete");
        return (i.days = storeMainDay);
      }
    }
  },
};

// fciStoreMealDays.fixMonth();

fciStoreMealDays.addImpInfo("jibon", 1600, "male", [1, 3, 5, 7], 12, 2022);
fciStoreMealDays.addImpInfo("nishat", 1604, "male", [5, 6], 12, 2022);
fciStoreMealDays.addImpInfo(
  "rasik",
  1602,
  "male",
  [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  12,
  2022
);
// fciStoreMealDays.testOfStoreDays();
// fciStoreMealDays.returnDays('jibon', 'nishat')
fciStoreMealDays.showInfo("jibon", 1600);
fciStoreMealDays.showInfo("nishat", 1604);
fciStoreMealDays.showInfo("rasik", 1602);
fciStoreMealDays.deleteDays(1600, [3, 7]); // * jibon deleting
fciStoreMealDays.deleteDays(1604, [6]); // * nishat deleting
fciStoreMealDays.deleteDays(1602, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]); // * rasik deleting
fciStoreMealDays.showInfo("jibon", 1600);
fciStoreMealDays.showInfo("nishat", 1604);
fciStoreMealDays.showInfo("rasik", 1602);
// * todo: hav to fix deletinG days
