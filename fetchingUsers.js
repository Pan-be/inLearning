
const getUsers = async () => {
    let people = await fetch('https://randomuser.me/api/?results=5')
    let data = await people.json()
    const timeline = document.querySelector("#timeline")
    console.log(data.results);
    data.results.forEach(element => {
        let image = document.createElement('img')
        image.src = element.picture.medium
        timeline.appendChild(image)
    })
}


getUsers()