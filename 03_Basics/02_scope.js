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

