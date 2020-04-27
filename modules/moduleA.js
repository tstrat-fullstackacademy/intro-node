// A.
console.log('I am module A.')

function printMyName(person) {
  console.log(person.name)
}

// printMyName('Finn')

module.exports = printMyName
