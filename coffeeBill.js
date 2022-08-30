const bills = [2, 3, 1, 5]

const coffeePrice = 1.25

// const sumOfCoffies = 13.75

// `The total bill is ${total}`
const multipier = (arr) => {
	let sumOfCoffies = arr.reduce((previous, current) => (previous += current))
	return `The total bill is ${sumOfCoffies * coffeePrice}`
}
console.log(multipier(bills))
