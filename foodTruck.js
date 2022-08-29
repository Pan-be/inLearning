const vendor1 = ['pizza', 'pasta']
const vendor2 = ['pizza', 'calzones']
const vendor3 = ['lobster']
const vendor4 = ['calzones']

const food = vendor1.concat(vendor2, vendor3, vendor4)

food = [...new Set([...vendor1, ...vendor2, ...vendor3, ...vendor4])]

console.log(food);
//make UL with all menue without duplicates [pizza calzones pasta lobster]