const fs = require("node:fs");
const text = fs.readFileSync("./day_3/input.txt", "utf8");

const textArray = text.split("\n");
// console.log(myArray);

const width = textArray[0].length;
const height = myArray.length;

console.log(width);
console.log(height);

for (let i = 0; i < height; i++) {
	console.log(textArray[i]);
}

for (let i = 0; i < width; i++) {
	console.log(textArray[0][i]);
}
