'use strict'

const personFunction = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName
  }
}

const personData = {
  firstName: 'Jonathan',
  lastName: 'Doe'
}

const resultA = personFunction.fullName.call(personData)
const resultB = personFunction.fullName.bind(personData)()

console.log(resultA)
console.log(resultB)
