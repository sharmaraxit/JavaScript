// Strings can be denoted in both -> ' ' and -> " ".

const name = "nono";
const age = 24;

console.log(name + age + " I am aging bro!");  // strings output k sath sath new string bhi concatenate ho gya

// ye thoda purana syntax hai strings k liye // IGNORE THIS SYNTAX -> degrade readability

// new way is this one  // MUST BE WRITTEN LIKE THIS IN PRODUCTION

console.log(`Hello my name is ${name} and now i am ${age} years old. Shocking right!`);
//  we are using backticks (` `) and this variable call method -> ${ _pass variable here } ex -> ${name}, ${age}.

const gameName = new String ('nonononi');

console.log(gameName);  // String: nonononi

console.log(gameName[0]);  // n

console.log(gameName.length);  // 8

console.log(gameName.toUpperCase());  // NONONONI

console.log(gameName.charAt(7));

console.log(gameName.toUpperCase().charAt(7));

console.log(gameName.indexOf('i'));

console.log(gameName.substring(0,4)); // nono


const newSstring = "   nonononi    ";
console.log(newSstring.trim()); // ye starting and end spaces remove krta hai

const url = "https://jsweb.com/nonowebsitedev"
console.log(url.replace('nono','frontend')); // https://jsweb.com/frontendwesitedev

const newUrl = new String(url);
console.log(newUrl.includes('nono')); // checks whether your string is available or not as true or false.

const person = "red-wine-dirty-swine";

console.log(person.split('-')); // changes the string to array on the basis of '-'








