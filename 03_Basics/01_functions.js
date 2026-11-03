// Function can be called multiple times

// function dishoom() {
//     console.log("N");
//     console.log("O");
//     console.log("N");
//     console.log("O");

// }

// dishoom(); // calling the function


    function addTwoNum(num1, num2) {  // num1, num1 are called parameters
    // console.log(num1 + num2);
}

// addTwoNum(10, 20); // 30  (num1 = 10, num2 = 20) are called arguments
// addTwoNum(50, "4"); // 54
// addTwoNum("50", 4); // 504

// these functions can also be stored in variables

const addTwoNumbers = function(num1, num2) {
    // console.log(num1 + num2); // this doesn't return anything it just print 
    let result = num1 + num2;
    return result; // this will return the value to the function call
}

const result = addTwoNumbers(10, 20); 
// console.log("Results: ", result);


function loginUserMessage(username){
    return `You are logged in as ${username}`;
}

const message = loginUserMessage("Nono");
console.log(message);


// what if we don't pass any argument to the function
function loginUserMessage2(username){

    if(username === undefined){  // or use !username
        return "Please provide a username";
    }
    return `You are logged in as ${username}`;
}

const message2 = loginUserMessage2();
console.log(message2); // Please provide a username


// case: we dont know how many arguments will be passed to the function

function calculateCartPrice(...prices){ // ...prices is called rest operator
    return prices;
}

const totalPrice = calculateCartPrice(20, 30, 40, 50, 60);
console.log(totalPrice); // [20, 30, 40, 50, 60]  it will return an array of all the arguments passed to the function

// object case 

const user = {
    username: "Noni",
    price: 199
}

function handleObjec(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObjec(user); // Username is Noni and price is 199

// function k sath object define kr diya aur usko function k andar use kr diya

// zaruri nhi object pehle define ho baad me bhi kr skte hai
handleObjec(
    {
    username: "Nono",
    price: 399
    }   
); // Username is Nono and price is 399

// we can pass arrays too

const arr = [1, 2, 3, 4, 5];

function handleArray(anyArray){
    console.log(`Array is ${anyArray}`);
}

handleArray(arr); // Array is 1,2,3,4,5