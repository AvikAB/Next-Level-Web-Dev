const weight = process.argv[2];
const height = process.argv[3];

const bmi = (weight, height) => weight / (height*height);

console.log(bmi(weight, height));
