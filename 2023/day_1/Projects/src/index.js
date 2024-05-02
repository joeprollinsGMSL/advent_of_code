const fs = require("node:fs");
const text = fs.readFileSync("./2023/day_1/Projects/src/input.txt", "utf8");

const textArray = text.split("\n");

const writtenNumbers = Object.freeze({
	ZERO: 0,
	ONE: 1,
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	SEVEN: 7,
	EIGHT: 8,
	NINE: 9,
});

function messageParser(calibrationDocument) {
	let calibrationNumSum = 0;
	let calibrationNum = 0;
	for (const line of calibrationDocument) {
		let firstDigit = null;
		let lastDigit = null;
		for (const char of line) {
			if (firstDigit == null && Number.isInteger(Number(char))) {
				firstDigit = char;
			}
			if (Number.isInteger(Number(char))) {
				lastDigit = char;
			}
		}
		calibrationNum = Number(firstDigit.toString() + lastDigit.toString());
		calibrationNumSum = calibrationNumSum + calibrationNum;
	}
	return calibrationNumSum;
}

console.log(messageParser(textArray));
