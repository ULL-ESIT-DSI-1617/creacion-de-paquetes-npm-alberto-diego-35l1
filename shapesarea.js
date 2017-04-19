var sshape = require('ull-shape-alberto-diego');


module.exports.getArea = function getArea(shape, options) {
  var Shape = sshape.shapes[shape], area = 0;

  if (Shape && typeof Shape === 'function') {
    area = new Shape(options).getArea();
  } else {
    throw new Error('Invalid shape: ' + shape);
  }

  return area;
}
