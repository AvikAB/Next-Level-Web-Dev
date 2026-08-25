let user = {
    name: "Avik",
    age: 24,
    address: "Dhaka"
};

// console.log(user);

// console.log(user.name);
// console.log(user["age"]);

// delete user.address;   // delete
// console.log(user);
// user.address = "Rajshahi";   // add
// console.log(user);
user.address = {   // update
    city: "Naogaon",
    area: "Manda"
}
// console.log(user);


console.log(Object.entries(user));   // key-val pair prints
console.log(Object.keys(user));      // keys prints
console.log(Object.values(user));    // values prints
