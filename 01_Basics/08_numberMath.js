const score = 500;
console.log(score); // 500

const balance = new Number(1000);
console.log(balance); // Number : 1000 explicitly says that this is a number

const number = 1212.43256;
console.log(number.toFixed(3)); // decimal values upto parameter provided after rounding off

const hundred = 1000000000;
console.log(hundred.toLocaleString('en-IN')); // it changes numbers to string along with the value we want to see the change in
// 1,00,00,00,000

// ----------------------MATHS---------------------------

console.log(Math); // it is an objects with lots of methods

console.log(Math.abs(-4)); // absolute value which changes the - to + and + remains +.

console.log(Math.round(4.66)); // round off the value

console.log(Math.ceil(3.78)); // gets the top value or highest value which is 4

console.log(Math.floor(3.78)); // gets me lowest value which is 3

console.log(Math.sqrt(25)); // square root of 25 -> 5

console.log(Math.max(1,9,2,8,3,8)); // maximum value -> 9

console.log(Math.min(1,9,2,8,3,7)); // minimum value -> 1


console.log(Math.random()); // gets me random values between 0-1

console.log((Math.random()*10)+1); // if we want more range values


// suppose we want custom min and max value range

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // must remember this note



