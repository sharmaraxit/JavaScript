// const coding = ["js", "ruby", "c++", "java"];

// coding.forEach(element => {
//     console.log(element);
// });

// alternate


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// forEach has much more access

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })
// output
// js 0 [ 'js', 'ruby', 'c++', 'java' ]
// ruby 1 [ 'js', 'ruby', 'c++', 'java' ]
// c++ 2 [ 'js', 'ruby', 'c++', 'java' ]
// java 3 [ 'js', 'ruby', 'c++', 'java' ]


// object inside Array
const myCoding = [
    {
        languageName: "javascript",
        langFileName: "js"
    },
    {
        languageName: "java",
        langFileName: "java"
    },
    {
        languageName: "python",
        langFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})