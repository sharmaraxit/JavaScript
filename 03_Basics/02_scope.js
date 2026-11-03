// let a = 10;
// const b = 20;
// var c = 30;


if(true){
    let a = 100;
    const b = 200;
    var c = 300;
}
// console.log(a); // it will not print, a doesnt have it scope outside the if loop
// console.log(b); // same here too
// console.log(c); // but c will be printed because var has a global scope, it is not block scoped like let and const


// block scope and global scope
let a = 10;

if(true){

    let a = 100;
    const b = 200;

    console.log(`Inside the block: ${a}`); // it will print 100 and 200 because they are inside the block
}
console.log(`Outside the block: ${a}`); // it will print 10 because it is outside the block, so it will take the value of a from the global scope


// nested scope  

// testing nested scope

// function one(){
//     username: "Nono";

//     function two(){
//         const website = "Nono.com";
//         console.log(username); 
//     } 
//     console.log(website); // it will give an error because website is not defined in the function one, it is defined in the function two, so it is not accessible in the function one
//     two(); // it will give an error because website is not defined in the function one, it is defined in the function two, so it is not accessible in the function one
// }

// one(); // it will give an error because username is not defined in the function two, it is defined in the function one, so it is not accessible in the function two

// corrected code

function one(){
    const username = "Nono";

    function two(){
        const website = "Nono.com";
        console.log(username); // it will print Nono because username is defined in the function one, so it is accessible in the function two
    } 
    two(); // it will print Nono because username is defined in the function one, so it is accessible in the function two
}
one(); // it will print Nono because username is defined in the function one, so it is accessible in the function two

// this means the child function can access the parent function's variables, but the parent function cannot access the child function's variables. This is known as lexical scoping in JavaScript.

// nested if statements

if(true){
    const username = "Nono";

    if(username === "Nono"){
        const website = ".website.com";
        console.log(username + website); // it will print Nono because username is defined in the parent if statement, so it is accessible in the child if statement
    } 
    // console.log(website); // it will give an error because website is not defined in the parent if statement, it is defined in the child if statement, so it is not accessible in the parent if statement
}

// +++++++++++++++ interesting concept ++++++++++++++++++++++++


// addone abhi niche se agar upar le aye function sse pehle declare kre to koi error nhi aya
// aur fir ye execute bhi ho gya, iska reason ye h ki function declaration ko javascript engine pehle hi read kr leta h aur fir execute krta h, isliye ye error nhi aaya

addone(5);

function addone(num){
    return num + 1;
}
// addone(5); // it will return 6 because it is adding 1 to the number passed as an argument
// abhi value print nhi hui h sirf return hui h


// pehle ki tarah addone(5); ko upar le aaya to error aaya, iska reason ye h ki function expression ko javascript engine pehle read nhi krta, isliye ye error aaya
// addtwo(5); // it will give an error because addtwo is not defined yet, it is defined later in the code
const addtwo = function(num){
    return num + 2;
}
addtwo(5); // it will return 7 because it is adding 2 to the number passed as an argument
// abhi value print nhi hui h sirf return hui h

