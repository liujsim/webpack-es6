class Person {
  // constructor (name, age) {
  //   this.name = name
  //   this.age = age
  // }
  constructor ({
    name = 'runcelim',
    age = 24,
    msg = 'I’m coder'
    } = {}, callback) {
    this.name = name
    this.age = age
    this.msg = msg
    if (typeof callback === 'function') {
      callback()
    }
  }

  say () {
    return `I 'm ${this.name} ,${this.age} years, info: ${this.msg}`
  }
}

export default Person;
