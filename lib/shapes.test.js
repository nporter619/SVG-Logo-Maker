const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () => {
  it('should return correct SVG markup', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  it('should return correct SVG markup', () => {
    const shape = new Circle('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  it('should return correct SVG markup', () => {
    const shape = new Square('green');
    expect(shape.render()).toEqual('<rect width="200" height="200" fill="green" />');
  });
});
