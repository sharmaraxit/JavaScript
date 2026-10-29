// To Remember

//  Date objects encapsulate an integral number that represents milliseconds
//  since the midnight at the beginning of JANUARY 1 1970, UTC(the epoch).

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // object

// if we want a specific date

let myCreatedDate = new Date(2002, 0, 26);
console.log(myCreatedDate.toDateString());

let customDate = new Date(2026, 9, 30, 0, 30);
console.log(customDate.toLocaleString());

// we can also input custom format date like (dd/mm/yyyy)

let indDate = new Date("01-26-2002");
console.log(indDate.toLocaleString());

// if you want to check exact time of now

let myTime = Date.now();
console.log(myTime); // ye milliseconds me aya hai
console.log(indDate.getTime());

// convert milli to seconds

console.log(Math.floor(Date.now()/1000));

// if you want month day hour there are more methods to go

let newDateToday = new Date();

console.log(newDateToday.getMonth() + 1);
console.log(newDateToday.getDay());


myTime.toLocaleString('default',{
    weekday: "long",
    timezone: ""
})

