"use strict";
var getArea = require('./shapesarea.js');

var sshape = require('ull-shape-alberto-diego');
require('ull-shape-triangle-alberto-diego');
require('ull-shape-rectangle-alberto-diego');
require('ull-shape-square-alberto-diego');


try {
  var t = getArea.getArea('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = getArea.getArea('Square',    { width: 100 });
  console.log(s);
  var r = getArea.getArea('Rectangle', { width: 100, height: 100 });
  console.log(r);
  var b = getArea.getArea('Bogus');
}
catch (e) {
  console.log(e);
}
