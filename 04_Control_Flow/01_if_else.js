// comparison operator

// <, >, <=, >=, ==, !=, ===

// IF Statement

/*

if(condition){

}

condition true hoga to hmlog loop k andar jaenge or else nhi jaenge
same agar condtion false dede to loop k andar tab hi jaega jab condition false niklega

*/

/*
let user1 = "Nono";
const isUserLoggedIn = true;

if(isUserLoggedIn == false){
    console.log(`not logged in, please login first`);
}
else{
    console.log(`welcome ${user1}`);
}

console.log(`If loop successfully executed`);
*/

// output:
// welcome nono
// if loop successfully executed

// one more example

// const score = 200;

// if(score > 100){
//     const power = "fly";  // iska scope iske if statement k andar tak hi available hai
//     console.log(`User Power: ${power}`);
// }

// short hand notation
// example

// const balance = 1000;

// if(balance > 500) console.log("test"); // ye ek hi line me execute hota hai

// nesting if-else

// const balance = 1000;

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
    
// }

// real life example

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if(userLoggedIn && debitCard){  // && operator: all condition must be true to be executed
//     console.log("allowed to buy course");
// }

// if(loggedInFromEmail || loggedInFromGoogle){ // || operator: any one of them must be true to be executed
//     console.log("User logged in");
// }

// Nullish Coalescing Operator (??): null undefined 

// ye null k basis pr safety provide krta h ab tm nhi 
// chahoge ki tmhra koi function code ka value null aye

// let val1;
// // val1 = 5 ?? 10  // -> 5
// // val1 = null ?? 10 // -> 10
// // val1 = undefined ?? 15 // -> 15
// val1 = null ?? 10 ?? 20 // -> 10
// console.log(val1);

// ye ek tarah se error handling ka part h aage dekhenge

// Ternary Operator

// condition ? true : false

// const iceTeaPrice = 100;
// iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

// ek single line me condition check