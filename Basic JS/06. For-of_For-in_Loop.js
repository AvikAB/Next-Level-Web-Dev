// for of loop:
// iterates on iterable items, (array, strings, maps, sets)

let tech = ["JS", "TS", "CPP", "Node"];
for(let i of tech){
    console.log("Learning:", i);
}


// for-in loop:
// Use for objects to get key or properties.

let obj = {
    name: "Mr.X",
    age: 56,
    address: "California"
};

for(let ele in obj){
    console.log(ele,"->",obj[ele]);
}
