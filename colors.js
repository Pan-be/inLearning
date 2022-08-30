const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const black = document.querySelector(".black")

// const changeColor = (color) => {
// 	return () => {
// 		document.body.style.backgroundColor = color
// 	}
// }

// red.addEventListener("click", changeColor("red"))
// blue.addEventListener("click", changeColor("blue"))
// black.addEventListener("click", changeColor("black"))

class PageColor {
	constructor(color) {
		this.color = color
	}
	changeColor() {
		return () => {
			document.body.style.backgroundColor = this.color
		}
	}
}

red.addEventListener("click", new PageColor("red").changeColor())
blue.addEventListener("click", new PageColor("blue").changeColor())
black.addEventListener("click", new PageColor("black").changeColor())
