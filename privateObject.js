const username = Symbol("username")
const password = Symbol("password")

const user = {
	[username]: "konradbieniek",
	[password]: "password",
	age: 33,
}

console.log(user.username)
console.log(user.password)
console.log(user.age)
