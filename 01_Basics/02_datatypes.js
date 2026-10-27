let name = "nono";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];
let address = {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345" };

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);

// Datatypes in JavaScript:  (Primitive Datatypes and Reference Datatypes)

// 1. String: Represents textual data, enclosed in single or double quotes.
// 2. Number: Represents numeric values, both integers and floating-point numbers.
// 3. Boolean: Represents true or false values.
// 4. Array: Represents a collection of values, enclosed in square brackets.
// 5. Object: Represents a collection of key-value pairs, enclosed in curly braces.
// 6. Undefined: Represents a variable that has been declared but not assigned a value.
// 7. Null: Represents the intentional absence of any object value.
// 8. Symbol: Represents a unique and immutable primitive value (introduced in ES6).
// 9. BigInt: Represents integers with arbitrary precision (introduced in ES2020).

// Object 
// type of name; // string

console.log("Type of name:", typeof name); // string

// type of undefined; // undefined
let undefinedVariable;
console.log("Type of undefinedVariable:", typeof undefinedVariable); // undefined

// type of null; // object
let nullVariable = null;
console.log("Type of nullVariable:", typeof nullVariable); // object

