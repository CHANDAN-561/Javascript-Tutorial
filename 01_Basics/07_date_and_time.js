 /* Handaleing time and date in javascript is a bit complex relative to other langs. Js starts calculating time from 1st january 1970 and returns current time miliseconds (amount of time passed from 1970) by default.
 */

//Current time
const liveDate = new Date();
// console.log(liveDate); //returns current date but readable easily.
// console.log(liveDate.toString()); //DayName Month Date Year H:M:S TimeZone
// console.log(liveDate.toDateString()); //DayName Month Date Year
// console.log(liveDate.toLocaleString()); //--D/M/YYYY, H:M:S format
// console.log(typeof(liveDate)); //obj

//Custom Time
const myDate = new Date(2018, 3, 11, 9, 13, 43); //month digit starts from 0 here so 0 = jan. The format is (YYYY, M, D, H, M, S).
// console.log(myDate.toString());

//different formats of setting custom date
const newDate1 = new Date("1983-02-23"); //YYYY-MM-DD format, in case of setting date by custom format the months start from 1.
// console.log(newDate1.toLocaleString());
const newDate2 = new Date("04-12-2005"); //DD-MM-YYYY format
// console.log(newDate2.toLocaleString());

const currentDate = Date.now(); //different way of declaring new objects of a class.
// console.log(currentDate); //returns the amount of time passed from 1 jan 1970 in miliseconds.
// console.log(newDate2.getTime()); //returns the time in ms
// console.log(Math.floor(Date.now() / 1000)); //deviding by 1000 gives the result in seconds instead of ms.

const newDate3 = new Date();
console.log(newDate3.getDay()); //gives day as a number.
console.log(newDate3.getMonth() + 1); //gives month as number, since month starts from 0 adding 1 makes it easier to read.
console.log(newDate3.getFullYear()); //gives full year.

console.log (newDate3.toLocaleDateString('default', {
    weekday: "long"
}));