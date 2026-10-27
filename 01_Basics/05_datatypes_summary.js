// Data types

// 1. Primitive

/*
1.1. String
1.2. Number
1.3. Boolean
1.4. Null
1.5. Undefined
1.6. Empty
1.7. Symbol
1.8. BigInt
*/

// String

let name = "Nono";
console.log(name);

//number

const age  = 24;
console.log(age);

// Boolean

const booleanIsLoggedIn = false;

// Null Value

let noValue = null;
console.log(noValue);

console.log(typeof noValue);


// Undefined

let undefinedValue;
console.log(typeof undefinedValue);

// Symbol
// depends on ids which is always unique
let id = Symbol("123");  
let anotherId = Symbol("123");
console.log(id === anotherId);  // false

console.log(typeof id, anotherId);


// Big numbers => BigInt

const bigNum = 12345678900987654321n;
console.log(typeof bigNum);

console.log(typeof bigNum);




// 2. Non-Primitive OR Reference type

/*
1.1. Arrays
1.2. Objects
1.3. Functions
*/

// Arrays

let array1 = ["tom", "jerry","spike"];

// Objects

const object1 = {
    name: "Nono",
    age: 24,
    email: "nono@gmail.com"
};

// Functions

const myFunction = function(){
    console.log(
        "Hello World!"
    );
    
}