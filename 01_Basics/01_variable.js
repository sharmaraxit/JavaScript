const accountId = 155443;
let accountEmail = "nono@gmail.com";
var accountPassword = "123456";
var accCity = "Delhi";

/*we will try here changing values */

// accountId = 155444;  // This will throw an error because accountId is a constant and cannot be reassigned.
console.log(accountId);

accountEmail = "newemail@gmail.com";  // This will work because accountEmail is declared with let
console.log(accountEmail);

accountPassword = "newpassword";  // This will work because accountPassword is declared with var
console.log(accountPassword);

accCity = "Mumbai";  // This will work because accCity is declared with var.
console.log(accCity);

// This method of declaring variables is useful for maintaining the scope and preventing accidental reassignment of values.

// we can use console.table to display the variables in a tabular format for better readability.

console.table([accountId, accountEmail, accountPassword, accountCity]);
// we can also use {} instead [] both are valid ways to display the variables in a tabular format.
console.table({accountId, accountEmail, accountPassword, accountCity});

/* 
Prefer not to use var for deriving variables, because of issue of scope and hoisting. Use let and const instead.
*/

// lets see if we variable undeclared

let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  
// This will display undefined for accountState since it has not been assigned a value yet.