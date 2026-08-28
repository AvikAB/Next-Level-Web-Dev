// Find mx in a arr:
let marks = [25, 87, 99, 67, 34, 23];
let mx = marks[0];
for(let i=1; i<marks.length; i++){
    if(mx<marks[i]) mx = marks[i];
}
console.log(mx);

// Find the sum and avg:
let marks = [25, 87, 99, 67, 34, 23];
let sum = 0;
for(let i=0; i<marks.length; i++){
    sum += marks[i];
}
console.log(sum);
console.log(sum/marks.length);
