// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

/*
constractor
toExponential
toFixed 
toLocalString
toString
valueOf
toPrecision
*/

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));




/*  ++++++++++++++++++++++Maths +++++++++++++++++++++++++++++++++++++++++ */

// console.log(Math);
// console.log(Math.abs(-4)); // negative value into positive
// console.log(Math.round(4.6)); //(rounds to the nearest integer).
// console.log(Math.ceil(4.2)); // (always rounds up).
// console.log(Math.floor(4.9));// (always rounds down).
// console.log(Math.min(4, 3,6,8));
// console.log(Math.max(4, 3, 6, 8));

/*
Math.round(value)

Purpose: Rounds the number to the nearest integer.
Behavior:
If the fractional part is 0.5 or higher, it rounds up to the next integer.
If the fractional part is less than 0.5, it rounds down to the previous integer.
Example in Code:
Math.round(4.6) rounds up because 0.6 > 0.5, so the result is 5.



Math.ceil(value)

Purpose: Rounds the number up to the nearest integer, regardless of the fractional part.
Behavior:
Always increases the integer part by 1 unless the number is already an integer.
Example in Code:
Math.ceil(4.2) rounds up to 5, because ceil always rounds up.


Math.floor(value)

Purpose: Rounds the number down to the nearest integer, regardless of the fractional part.
Behavior:
Always decreases the number to the integer below it unless the number is already an integer.
Example in Code:
Math.floor(4.9) rounds down to 4, ignoring the decimal part */

// console.log(Math.random());
// console.log((Math.random()*10) +1);

// console.log(Math.floor(Math.random()*10) + 1);


// const min = 10

// const max = 20

// console.log(Math.floor(Math.random() * (max - min +1)) + min)


// **************************************DATES*********************************

/*
The Date object in JavaScript is used to work with dates and times.
 It provides methods for getting and setting date values, 
 as well as performing date and time manipulations.
*/
// let now = new Date();
// console.log(now.toString()); // Outputs the current date and time
// console.log(now.toDateString());
// console.log(now.toLocaleString());
// console.log(typeof now);
let myCreatedDate = new Date("12-25-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newMonth() + 1);
// console.log(newDate.getDate());


// `${newDate.getDate()} and the time`

// newDate.toLocaleString('default',{
//     weekday: "long",
//    // timeZone: ""
//})

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

console.log();

