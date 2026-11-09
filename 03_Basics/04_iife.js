// Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. 
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// why we use IIFE?
// 1. To avoid polluting the global scope variables.
// 2. To create a private scope for variables and functions.
// 3. To execute code immediately without having to call it explicitly.
// 4. To create a closure that can maintain state between function calls. 


(function nono(){
    console.log(`DB Connected`);
})();

// if we pass parameters withh arrow function
((name) => {
    console.log(`DBConnections retry ${name}`);
})(`MySQL`);
