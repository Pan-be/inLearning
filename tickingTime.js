const clock = document.getElementById("clock")
const getTime = () => {
	return setInterval(() => {
		let time = new Date()
		let tick = time.toLocaleTimeString()
		clock.innerText = tick
	}, 1000)
}

getTime()
