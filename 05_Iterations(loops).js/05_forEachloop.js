const coding = ["js", "ruby", "c++", "java"];

coding.forEach(element => {
    console.log(element);
});

// alternate

function printMe(item){
    console.log(item);
}

// alternate

coding.forEach(printMe)