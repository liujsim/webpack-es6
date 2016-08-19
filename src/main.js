import Point from './Point.js';
import Person from './Person.js';

var body = document.querySelector('body');
body.textContent = 'webpack-es6-seed Good point: ' + new Point(1, 100);

// default value
document.write("<br>"+new Person().say());

// object param
document.write("<br>"+new Person({name: 'liujs',age:'25',msg:'I’m happy'}).say());

