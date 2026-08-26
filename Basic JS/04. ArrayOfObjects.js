let students = [   // array
    {  // students obj 1
        name: "Karim",
        id: 101,
    },
    {  // students obj 2
        name: "Fahim",
        id: 102,
    },
    {  // students obj 3
        name: "Sahim",
        id: 103,
        address: {  // nested obj
            area: "Mirpur 1",
            thana: "Darus Salam",
            lane: "Mazar Road",
            bus: ["victor", "alif", "mirpur metro"]
        }
    }
]

// console.log(students);
console.log(students[2].address.thana);
console.log(students[2]["address"]["thana"]);

console.log(students[2].address.bus[2]);
students[2].address.bus[2] = "brtc";   // update
console.log(students[2].address.bus[2]);
