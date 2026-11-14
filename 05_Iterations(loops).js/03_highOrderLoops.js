// for of loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(`Elements are ${num}`);
// }

//for string

// const greetings = "Hello World";

// for (const greet of greetings) {
//     console.log(`we can say ${greet}`);
// }

// Maps

const map = new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('FR',"France");
map.set('IN',"India"); // ye duplicate value map nhi insert krta hai
// map unique values hold krta hai aur jis order me values enter hue h
// same order me rakhta hai

// console.log(map);

// loop on map

// for (const key of map) {
//     console.log(key);
// }
// iske output me sab arrays me ajaenge unko ek sath likhna h with values

for (const [key, values] of map) {
    console.log(key, ':-',values);
}

// output
// IN :- India
// USA :- United States of America
// FR :- France
