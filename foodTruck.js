const menuNode = document.querySelector('#app')
let vendor1 = ['pizza', 'pasta']
let vendor2 = ['pizza', 'calzones']
let vendor3 = ['lobster']
let vendor4 = ['calzones']

let food = vendor1.concat(vendor2, vendor3, vendor4)

food = [...new Set([...vendor1, ...vendor2, ...vendor3, ...vendor4])]

console.log(food);

// const makeMenu = (menu) => {

//     for (let item of menu) {
//         let foodNode = document.createElement('li')
//         foodNode.innerText = item
//         menuNode.appendChild(foodNode)
//     }
// }

// makeMenu(food)

class MakeMenu {
    // constructor(menu) {
    //     this.menu = menu
    // }
    render(menu) {
        for (let item of menu) {
            let foodNode = document.createElement('li')
            foodNode.innerText = item
            menuNode.appendChild(foodNode)
        }
    }
}

const renderMenu = new MakeMenu()
renderMenu.render(food)
//make UL with all menue without duplicates [pizza calzones pasta lobster]