const user = {
    name: "nono",
    price: 1000,

    welcomeMsg: function(){
        console.log(`Welcome ${this.name} to our website!`); 
        // this is used to access the properties of the object, 
        // in this case it is used to access the name property of the user object
    }
}

user.welcomeMsg(); // it will print Welcome nono to our website! because this.name is used to access the name property of the user object

// ye andar k values ko access kar rha hai 
// agar koi anonymous change krde value

user.name = "badmos nono"; //yhaa curly braces k andar jo object tha wo change hua isiliye badmos nono print hua
user.welcomeMsg(); // it will print Welcome badmos nono to our website! because this.name is used to access the name property of the user object


// THIS keyword 
console.log(this); // it is an empty object 
// because it is not inside any function or object, 
// so it is referring to the global object which is window in browser and 
// global in node.js

// objects k andar this keyword ka use krke hum us object k andar ki properties ko access kr skte h,
// fuunction k andar krke dekhte hai

function chai(){
    let username = "nono";
    console.log(this.username); // it is an empty object
}

// what we have learnt: the this keyword is used to access the properties of an object, but it cannot be used to access the properties of a function.


// ARROW Function

// basic syntax of arrow function

// () => {
//     // code block
// }

const add = (a, b) => {
    return a + b;
}

console.log(add(10, 20)); // it will print 30 because the add function is called with the arguments 10 and 20

// one more way -> Implicit return

const add2 = (a, b) => a + b; // it is an implicit return because we are not using the return keyword, it will return the value of a + b

console.log(add2(10, 20)); // it will print 30 because the add2 function is called with the arguments 10 and 20

// one more way -> single parameter

const add3 = a => a + 10; // it is an implicit return because we are not using the return keyword, it will return the value of a + 10

console.log(add3(10)); // it will print 20 because the add3 function is called with the argument 10