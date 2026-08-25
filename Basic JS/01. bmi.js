// check bmi

const weight = process.argv[2];
const height = process.argv[3];

const bmi = (weight, height) => weight / (height*height);

const bmiCalc = bmi(weight, height);

if(bmiCalc<18.5) console.log("Underweight");
else if(bmiCalc>=18.5 && bmiCalc<=24.9) console.log("Fit");
else if(bmiCalc>=25.0 && bmiCalc<=29.9) console.log("Overweight");
else console.log("Obesity");


/* test case:
45 1.75
70 1.80
85 1.78
100 1.75
*/

/*
node bmi.js 45 1.75
*/
