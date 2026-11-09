// ----------
// | {code} |  -> Global Execution Context
// ---------- 

// -> Function Execution Context
// -> Eval Execution Context

// ----------
// | {code} |  -> Memory Creation Phase (MCP)
// ----------  -> Execution Phase

// example code to understand the phases of execution of javascript


// STEP 1: Global execution or Global Environment -> every code runs inside this. 
//         It is allocated inside THIS. Compulsory step.

// STEP 2: Memory Phase -> Gather all variable and keep them inside.

// variable -> val1 or val2 = undefined (jab koi variable memory k andar banti hai tb 
//             initially usko memory undefined assign karta hai.)

// function addNum -> function's defination (jo curly braces k andar hota hai
// like { let total = num1 + num2;
//    return total; }).

// same result1 or result2 dono variable me initially undefined hoga.

// STEP 3: Execution Phase -> final execution time
// result1 -> yaha to function call ho rha hai (addNum)ye ek apna execution context banaega
//  addNum -> -----------------------------
//            | new variable environment  |
//            |            +              |
//            |     execution thread      |
//            -----------------------------

//            new executional context

let val1 = 10;
let val2 = 5;

function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(20, 10);