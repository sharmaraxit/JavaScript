const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNum.map((num)=> num + 10);
// console.log(newNums);

// these are regular

// CHAINING - we can use multiple functions

const newNum = myNum
.map((num) => num * 10) // map direct perform krta hai
.map((num) => num + 1)
.filter((num)=> num >= 50) // filter true false pr work krta hai

// console.log(newNum);

// hmlog isi tarah bohot sari chaining kr sakte hai


// Reduce operator


// functions se likhe hai


// const nums = [1, 2, 3]

// const myTotal = nums.reduce(function (acc, currVal) {
//     return acc + currVal
// }, 0) // 0 initial value h accumulator ka, ikso scope k baad , deke value dete h

// console.log(myTotal);


// ab arrow function se likhte hai

// const myTotal = nums.reduce((acc, currVal) => {return acc + currVal},0)
// console.log(myTotal);


// example for understanding

const shoppingCart = [
    {
        itemName: "js-course",
        price: 2999
    },
    {
        itemName: "html-course",
        price: 1999
    },
    {
        itemName: "python-course",
        price: 2499
    }
]

const myTotal = shoppingCart.reduce((acc, item)=>acc + item.price, 0)
console.log(myTotal);
