const { Square, Triangle, Circle } = require("../lib/shapes");
// these tests makes sure that the template variables in the shape classes are made properly
describe("Circle", () => {
  it("should have a template for a blue circle", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circ = new Circle('something', 'blue', 'something');
    expect(circ.template).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  it("should render svg for a bisque triangle", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const triangle = new Triangle('something', 'bisque', 'something');
    expect(triangle.template).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  it("should render svg for a dodgerblue square", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new Square('something', 'dodgerblue', 'something');
    expect(square.template).toEqual(expectedSvg);
  });
});