// Stack Memory and Heap Memory

// Stack Memory
// used when we use primitive datatype

/*

---------------------------
|                         |
---------------------------
---------------------------
|                         |
---------------------------
---------------------------
|                         |
---------------------------
---------------------------
|                         |
---------------------------
---------------------------
|                         |
---------------------------
Stack Memory

*/


// Heap Memory
// used when we use non-primitive datatype

/*

---------------------------
|                         | 
|                         |
|                         |
|                         |
|                         |
|                         |
---------------------------
Heap Memory

*/

let myPcName = "lenovopad3gamingi7";

let myUpgradePc = myPcName;
myUpgradePc = "asusRog5090";

console.log(myPcName);
console.log(myUpgradePc);


/*

---------------------------
|                         |
---------------------------
---------------------------
|        userTwo          |   // It basically provides the copy of the variable to modify data.
---------------------------
---------------------------
|        userOne          |
---------------------------
---------------------------
|        myUpgradePc      |
---------------------------
---------------------------
|        myPcName         |
---------------------------

*/


let userOne = {
    email: "noni@gmail.com",
    upi: "noni@bank"
};

let userTwo = userOne;

userTwo.email = "nono@gmail.com";

console.log(userOne);
console.log(userTwo);

/*

-------------------------------
|                             | 
|                             |
|     {                       |
|    email: "nono@gmail.com", |
|    upi: "noni@bank"         |
|    };                       |
|                             |
|                             |
|   {                         |
|    email: "noni@gmail.com", |
|    upi: "noni@bank"         |
|    };                       |
|                             |
-------------------------------

*/