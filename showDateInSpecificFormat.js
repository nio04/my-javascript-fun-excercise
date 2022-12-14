const date = new Date();
const getHour = date.getHours();
const getMinute = date.getMinutes();
const getSecond = date.getSeconds();
const getWeekDays = date.getDay();
let getDays = Number(date.getDate());
const getMonth = date.getMonth();
const getYear = date.getFullYear();


// * fix week
let fixedWeek = "";
switch (getWeekDays) {
  case 0:
    fixedWeek += "SunDay";
    break;
  case 1:
    fixedWeek += "Monday";
    break;
  case 2:
    fixedWeek += "TuesDay";
    break;
  case 3:
    fixedWeek += "WednesDay";
    break;
  case 4:
    fixedWeek += "ThursDay";
    break;
  case 5:
    fixedWeek += "FriDay";
    break;
  case 6:
    fixedWeek += "SaturDay";
    break;

  default:
    fixedWeek += `couldn't get week day`;
    break;
}
//  * fix HOUR
let fixedHour = 0;
if (getHour > 12) {
  fixedHour += getHour - 12;
}
// * add AM -PM
let addAM_PM = "";
if (getHour > 12) {
  addAM_PM += "PM";
} else {
  addAM_PM += "AM";
}

console.log(`today is: ${fixedWeek}
current time is: ${fixedHour}${addAM_PM}: ${getMinute}: ${getSecond}`);

// ! another format showing date : mm-dd-yyyy
// * fix month
const monthFixed = getMonth + 1;

function fixeDateForOneDigit(getDate) {
  const toString = getDate.toString();
  let toArr = Array.from(toString);
  if (toArr.length == 1) {
    toArr.unshift('0');
  } else {
    return getDate;
  }
  return toArr.toString().replaceAll(',', '');
}
const fixedDays = fixeDateForOneDigit(getDays);
const fixedMonth = fixeDateForOneDigit(monthFixed)

console.log(
  `another format for showing date are: [mm-dd-yyyy] ${fixedMonth}-${fixedDays}-${getYear}`
);
