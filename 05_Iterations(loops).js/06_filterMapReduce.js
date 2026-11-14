// const coding = ["js", "ruby", "c++", "java"];
// agar mai ek variable assign krdu iss for-each callback function me tab
// kya ye kuch value return krta bhi h ya nai

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);

// output
// js
// ruby
// c++
// java
// undefined // yaha to undefined arha matlab ye koi values return nhi kr rha hai
// even if agar hamlog manually return kre tab bhi indefined hi aega
// FOREACH apko values return krke nhi deta hai

// Filter operation (also a callback function)

// filter apko values return karke deta hai

// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNum.filter((num)=> num > 4)
// console.log(newNums);

//output: [ 5, 6, 7, 8, 9, 10 ]


// isko hmlog abtk function me sikhte aye hai

// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNums  = myNum.filter((num)=>{
//     return num > 4;  // yaha return kyu lagaya aur ye pehle wale se alag kaise h code
    // yaha h,logo ne curly braces use kiya hai jo ki scope hai 
    // jab bhi scope shuru hota hmlogo ko return use krna compulsory hai
// })
// console.log(newNums);

// output -> [ 5, 6, 7, 8, 9, 10 ]

// yhi kaam for each se krwa kar dekhte hai

// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNums = [];

// myNum.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// output -> [ 5, 6, 7, 8, 9, 10 ]

