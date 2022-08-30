class Movie {
	constructor(title, director, genre, releaseYear, rating) {
		this.title = title
		this.director = director
		this.genre = genre
		this.releaseYear = releaseYear
		this.rating = rating
	}

	showMovie() {
		return `${this.title}, a ${this.genre} film directed by ${this.director} was realesed in ${this.releaseYear}. It received a rating of ${this.rating}.`
	}
}

const LOTR = new Movie("LOTR", "Peter Jacson", "fantasy", 2001, "5 stars")

console.log(LOTR.showMovie())
