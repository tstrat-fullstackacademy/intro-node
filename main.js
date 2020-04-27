// Main

// standard import since it is 1 function
const functionFromA = require('./modules/moduleA')
// use destructuring if it is wrapped in an object
const { printFavoriteColor, printMyBrirthday } = require('./modules/moduleB')

console.log('Hello, World')

let names = [
  { name: 'Travis', birthday: 'Sept 1', color: 'purple' },
  { name: 'Finn' },
  { name: 'Priti' },
  { name: 'Collin' },
]

for (let person of names) {
  functionFromA(person)
  console.log('\n')
}

printMyBrirthday(names[0])
printFavoriteColor(names[0])
