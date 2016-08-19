class Person{
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  say () {
    return `I 'm ${this.name} ,${this.age} years.`
  }
}

export default Person;
