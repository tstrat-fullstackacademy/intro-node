// B.
console.log('I am module B.')

function printMyBirthday(person) {
  console.log(person.birthday)
}

function printFavoriteColor(person) {
  console.log(person.color)
}

module.exports = {
  printMyBirthday,
  printFavoriteColor,
}
