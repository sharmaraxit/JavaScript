// Objects can be defined or declared in literals and constructors

// Remember: if we declare using literal singleton does not form
//           but if we use constructors singleton forms. FOR INTERVIEW RELATED THEORY

// OBJECT Literals

// const jsUser = {
//     name: "nono",         // in this we have keys(name) and values("nono").
//     "full name": "nono noni",
//     age: 24,
//     location: "Kolkata",
//     email: "nono@gmail.com",
//     isLoggedIn: false
// }

// how can we access the object
// console.log(jsUser.email);  // ye sahi hai par use mostly nhi krna chahiye

// ye use krna sahi rahega
// console.log(jsUser[email]); // error agya kyu? email ka value string me hai

// correction- jis type ka value hai usi type ka input value hoga
// console.log(jsUser["email"]);
// console.log(jsUser["location"]);
// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser["age"]);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

// how to make a symbol object and add it to the main object

const mySym = Symbol("key1");

const jsUser = {

    [mySym] : "myKey1", // symbol initially declare hi [ ] k andar krte hai

    name: "nono",         // in this we have keys(name) and values("nono").
    "full name": "nono noni",
    age: 24,
    location: "Kolkata",
    email: "nono@gmail.com",
    isLoggedIn: false
}

console.log(jsUser[mySym]);

console.log(jsUser["email"]);
console.log(jsUser["location"]);
console.log(jsUser["isLoggedIn"]);
console.log(jsUser["age"]);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);

// we want to change the value of the key in the object
jsUser.age = 25; // this is how we can change the value of the key in the object

jsUser["location"] = "Mumbai"; // this is how we can change the value of the key in the object

jsUser["full name"] = "nono noni"; // this is how we can change the value of the key in the object

// we can freeze the object so that no one can change the value of the key in the object
Object.freeze(jsUser);

// now we can't change the values in the object even if we wanted to.

// let's say

jsUser["location"] = "Delhi";
jsUser["email"] = "nono1@gmail.com";

console.log(jsUser); // no changes made in the object because we have frozen the object


// function to get the keys of the object

// function for greetings. just for testing purposes

const JSUser = {
    name: "John",
    age: 30,
    email: "john@gmail.com",
    isLoggedIn: true,
    location: "New York",
    "full name": "John Doe"
}

JSUser.greetings = function(){
    console.log("Hello JS User");
    
}

// console.log(JSUser.greetings()); // Hello JS User
// console.log(JSUser.greetings); // [Function: greetings] it didn't execute the function 
                                // it just returned the function as it is.

// THIS method

JSUser.greetingsThis = function(){
    console.log(`Hello JS User, ${this.name}`); // we also used backticks for string interpolation
}                                               // we used this to check all the properties of the object and this will refer to the object itself

console.log(JSUser.greetingsThis()); // Hello JS User, John
console.log(JSUser.greetings());




