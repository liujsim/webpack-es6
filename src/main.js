import Point from './Point.js';
import Person from './Person.js';

var body = document.querySelector('body');
body.textContent = 'webpack-es6-demo Good point: ' + new Point(1, 100);

let p = new Person("runcelim", 24);
document.write("<br>"+p.say());
