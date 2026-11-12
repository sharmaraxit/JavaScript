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


// Call Stack
/*
      |                              |              suppose we have function methods
      |         three()              |              one(), two(), three()
      |          two()               |
      |          one()               |
      |------------------------------|
      |           Global             |
      --------------------------------


      here a rule called LIFO used which means Last In First Out

      diagram me dekho :
      1. call stack me hmesha global execution hoga hi compulsory hai
      
      2. fir agar sirf one() call hua to obv wo execute hoke bahar nikal jaega

      3. lekin agar one() call hua then same time pr two() aur three() dono call hua
         tab LIFO chalega.

      4. fir sabse pehle three() execute hoke memory phase se bahar niklega fir two() fir one()
*/