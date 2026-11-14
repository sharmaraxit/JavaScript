const myObject = {
    js : 'javascript',
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for (const key in myObject) {
    // console.log(key);
}
// ye to keys access ho gye
// ab agar object access krna ho to?

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

// for in for arrays

const programming = ["js", "rb", "swift"]

for (const key in programming) {
    // console.log(programming[key]);
}