
const getUsers = async () => {
    let people = await fetch('https://randomuser.me/api/?results=5')
    let data = await people.json()
    console.log(data);
}

getUsers()