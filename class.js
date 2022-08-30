class Book {
	constructor(title, author, ISBN, numCopies) {
		this.title = title
		this.author = author
		this.ISBN = ISBN
		this.numCopies = numCopies
	}

	get availability() {
		return this.getAvailability()
	}

	getAvailability() {
		if (this.numCopies === 0) {
			return "Out of stock"
		} else if (this.numCopies < 10) {
			return "Low stock"
		}
		return "In stock"
	}

	sell(numCopiesSold = 1) {
		this.numCopies -= numCopiesSold
	}

	restock(numCopiesStocked = 5) {
		this.numCopies += numCopiesStocked
	}
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5)

class TechnicalBook extends Book {
	constructor(title, author, ISBN, numCopies, edition) {
		super(title, author, ISBN, numCopies)
		this.edition = edition
	}
	getEdition() {
		return `The current version of this book is ${this.edition}`
	}
}

const Hobbit = new TechnicalBook("Hobbit", "JRRT", 232343, 5, 7)

console.log(Hobbit.getEdition())
