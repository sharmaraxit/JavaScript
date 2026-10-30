// Arrays

// must be written in [ ] brackets

const myArr = [0, 1, 2, 3, "nono"];

// collections of items stored in single variable
// it can be modified - resizable, contain mix datatypes
// starts from zeroth index

// lets access value
console.log(myArr[4]);

// ways to create array

const arr2 = ["spoidermon","captain budhau", "wanda aunty"];
console.log(arr2);

const myarray = new Array(1,2,3,4)
console.log(myarray);

// Array methods

myarray.push(5); // add elements form end
myarray.push(6);
myarray.pop(2); // remove elements from end
myarray.unshift(7); // add elements from start. increases load on cpu if we have big number of counts
myarray.shift(); // remove any eement which is in the first of array
console.log(myarray);

console.log(myarray.includes(9)); // checks the value is present or not

console.log(myarray.indexOf(3)); // check index of the value in array

const newArray = myarray.join(); // binds the array and changes the type - array to string

console.log(newArray);
console.log(typeof newArray); // string


// slice & splice

console.log("A  ", myarray);

const myna1 = myarray.slice(1,3);
console.log(myna1); // [2,3] didn't include range value and also didn't manipulate original array

console.log("B  ", myarray);

const myna2 = myarray.splice(1,3);
console.log(myna2); // [2,3,4] gets me pos value of 1,2,3 but it manipulated the original array and changed [1,2,3,4,5] to [1,5] it removed 2,3,4 from it.

console.log("C  ", myarray);


