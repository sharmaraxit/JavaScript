// one things we have missed 

const user = new Object(); // this is how we can create an object using the Object constructor
                           // but this is a singleton object and we can't create multiple objects using this method.

const user1 = {           // this is not a singleton object and we can create multiple objects using this method.

}

user1.name = "nono";
user1.age = 24;
user1.location = "Kolkata";
user1.email = "nono@gmail.com";

// console.log(user1);

const regularuser = {
    username: {
        fullname: {
            firstname: "nono",
            lastname: "noni"
        }
    }
}

// it is not a singleton object and we can create multiple objects using this method. As we said

// so if you want to access these nested objects

console.log(regularuser.username.fullname.firstname); // nono

// Merge Objects

const obj1 = {
    name: "nono",
    age: 24
}

const obj2 = {
    location: "Kolkata",
    email: "nono@gmail.com"
}

const obj3 = Object.assign({},obj1, obj2); // this will merge obj1 and obj2 and return a new object. {} guarantees that we are not mutating the original objects.
console.log(obj3); // { name: 'nono', age: 24, location: 'Kolkata', email: 'nono@gmail.com' }

// how can we forgot spread method
const obj4 = {...obj1, ...obj2}; // this will also merge obj1 and obj2 and return a new object. {} guarantees that we are not mutating the original objects.
console.log(obj4); // { name: 'nono', age: 24, location: 'Kolkata', email: 'nono@gmail.com' }


// Objects inside Arrays

const arr1 = [
    {
        name: "nono",
        age: 24
    },
    {
        name: "noni",
        age: 25
    },
    {
        name: "mini nono",
        age: 26
    },
    {
        name: "mini noni",
        age: 27
    }
]

arr1[1].name; // we can access and change the values like this

// now Object.keys() and Object.values() and Object.entries() are very useful methods to get the keys, values and entries of an object respectively.

console.log(Object.keys(user1)); // [ 'name', 'age' ]
console.log(Object.values(user1)); // [ 'nono', 24 ]
console.log(Object.entries(user1)); // [ [ 'name', 'nono' ], [ 'age', 24 ] ]

// this check whether the property is available or not in the object
console.log(user1.hasOwnProperty("name")); // true
console.log(user1.hasOwnProperty("employeeID")); // false