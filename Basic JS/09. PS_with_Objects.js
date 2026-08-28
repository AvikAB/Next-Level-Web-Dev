// Sum, Total & Avg on object
let student = {
    name: "Kaim",
    id: 1022,
    marks: {
        bangla: 75,
        english: 82,
        math: 87,
    }
};

let totMarks = 0;
let totSub = 0;

for(const sub in student.marks){
    totMarks += student.marks[sub];
    totSub++;
}

console.log(totMarks, totSub);

console.log((totMarks / totSub).toFixed(3));  // avg
