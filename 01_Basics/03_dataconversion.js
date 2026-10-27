// Data Conversion

// checking number type
let score1 = 83

console.log(typeof score1); // number
console.log(score1); // 83

// checking string type

let score2 = "83"; // this can also be a string if we get this from user side. we cant decide the input type.
console.log(typeof score2); // string
console.log(score2); // 83

let valueInNumber1 = Number((score2)); // converting the score to number type

console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // 83

// checking conversion of invalid string to number

let score = "83abc"; // this can also be a string if we get this from user side. we cant decide the input type. 
// so we need to convert it to number before we can use it in our logic.

let valueInNumber = Number((score)); // converting the score to number type

console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 83 NaN (Not a Number) bumber me change toh hogya string 
                            // lekin value number nhi hai ye thoda weak hai in javascript.

// what if the value is null

let score3 = null; // this can also be a string if we get this from user side. we cant decide the input type.
let valueInNumber3 = Number((score3)); // converting the score to number type

console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // 0 (null is converted to 0)

// what if the value is undefined

let score4 = undefined; // this can also be a string if we get this from user side. we cant decide the input type.
let valueInNumber4 = Number((score4)); // converting the score to number type

console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // NaN (undefined is converted to NaN)

// what if the value is boolean

let score5 = true; // this can also be a string if we get this from user side. we cant decide the input type.
let valueInNumber5 = Number((score5)); // converting the score to number type

console.log(typeof valueInNumber5); // number
console.log(valueInNumber5); // 1 (true is converted to 1)

let score6 = false; // this can also be a string if we get this from user side. we cant decide the input type.
let valueInNumber6 = Number((score6)); // converting the score to number type

console.log(typeof valueInNumber6); // number
console.log(valueInNumber6); // 0 (false is converted to 0)




// "83" => 83
// "83abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0
// " " => 0


// lets test more

let isLoggedIn = 1; 

let booleanIsLoggedIn = Boolean(isLoggedIn); // converting the score to number type

console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true (1 is converted to true)

let isLoggedIn2 = 0;    

let booleanIsLoggedIn2 = Boolean(isLoggedIn2); // converting the score to number type

console.log(typeof booleanIsLoggedIn2); // boolean
console.log(booleanIsLoggedIn2); // false (0 is converted to false)


// what if the value is string

let isLoggedIn3 = "nono"; // this can also be a string if we get this from user side. we cant decide the input type.
let booleanIsLoggedIn3 = Boolean(isLoggedIn3); // converting the score to number type

console.log(typeof booleanIsLoggedIn3); // boolean
console.log(booleanIsLoggedIn3); // true (non-empty string is converted to true)

// what if the value is empty string

let isLoggedIn4 = ""; // this can also be a string if we get this from user side. we cant decide the input type.
let booleanIsLoggedIn4 = Boolean(isLoggedIn4); // converting the score to number type

console.log(typeof booleanIsLoggedIn4); // boolean
console.log(booleanIsLoggedIn4); // false (empty string is converted to false)


// 1 => true
// 0 => false
// "nono" => true
// "" => false
// null => false
// undefined => false

// here our investigation study ends.

// BUT WAIT THERE ARE MORE TO GO! 

let someNumber = 123;

let stringNumber = String(someNumber); // converting the score to number type

console.log(typeof stringNumber); // string
console.log(stringNumber); // "123" (number is converted to string)