const marvelHeroes = ["Lohaman", "Makdaman", "Blackvidhwa"];

const dcHeroes = ["Superaadmi", "Chamgadadman", "Sapnawoman"];

// Goal is to merge arrays

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);

// ['Lohaman','Makdaman','Blackvidhwa',[ 'Superaadmi', 'Chamgadadman', 'Sapnawoman' ]]
// we got string inside a string as an element

// didn't pass the goal

/* we can access elements of inside array just for gk */
console.log(marvelHeroes[3][0]);


const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);

// ['Lohaman','Makdaman','Blackvidhwa','Superaadmi','Chamgadadman','Sapnawoman']
// passed the goal
// it returns a new array without making changes in original arrays

//we got another method for this merging
console.log("Spread method");

const allUniverse = [...marvelHeroes, ...dcHeroes];
console.log(allUniverse);

// ['Lohaman','Makdaman','Blackvidhwa','Superaadmi','Chamgadadman','Sapnawoman']


// suppose we have an array inside array inside array, pretty complex right!

const complexArray = [1,2,3,[4,5,6],7,[6,7,[4,5,],10],12];

const realArray = complexArray.flat(Infinity); // we must provide actual depth of array to calculate but anyways still infinity works
console.log(realArray);

// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 10, 12]