const menu = [
	{
		name: "Egplant Parmesan",
		vegetarian: true,
	},
	{
		name: "Spaghetti & Meatballs",
		vegetarian: false,
	},
	{
		name: "Broccoli Salat",
		vegetarian: true,
	},
]

const vegetarianMenu = (menu) => {
	const menuNode = document.getElementById("menu")
	const vegetarianOptions = menu.filter((option) => option.vegetarian === true)
	console.log(vegetarianOptions)
	vegetarianOptions.forEach((option) => {
		let dish = document.createElement("li")
		dish.textContent = option.name
		menuNode.appendChild(dish)
	})
}

vegetarianMenu(menu)
