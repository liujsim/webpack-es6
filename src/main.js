import Point from './Point.js'
import Person from './Person.js'
//import Confirm from './components/confirm/index.js'
import Password from './components/password/index.js'

//require('./components/confirm/index.css')
require('./components/password/index.css')
var body = document.querySelector('body')
body.textContent = 'webpack-es6-seed Good point: ' + new Point(1, 100)

// Confirm
//Confirm({ message: 'Are you sure?', cancelButtonText: '取消', confirmButtonText: '确定' }, function () {
//  console.log(new Person().say())
//}, function (){
//  console.log('confirm 调用')
//})

// Password
document.write('<br>' + '<div class="password-container-1"></div><div class="password-container-2"></div>')

let password1 = new Password('.password-container-1')
password1.getRealValue()
let password2 = new Password('.password-container-2')
password2.getRealValue()

// default value
document.write('<br>' + new Person().say())

// object param
document.write('<br>' + new Person({name: 'liujs', age: '25', msg: 'I’m happy'}, function () {}).say())

