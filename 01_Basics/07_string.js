// Strings can be denoted in both -> ' ' and -> " ".

const name = "nono";
const age = 24;

console.log(name + age + " I am aging bro!");  // strings output k sath sath new string bhi concatenate ho gya

// ye thoda purana syntax hai strings k liye // IGNORE THIS SYNTAX -> degrade readability

// new way is this one  // MUST BE WRITTEN LIKE THIS IN PRODUCTION

console.log(`Hello my name is ${name} and now i am ${age} years old. Shocking right!`);
//  we are using backticks (` `) and this variable call method -> ${ _pass variable here } ex -> ${name}, ${age}.
