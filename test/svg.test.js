const SVG = require("../lib/svg");
const { Square } = require("../lib/shapes");

describe("SVG", () => {
  it("should render a 300 x 200 svg element", () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg>< polygon points = "150, 18 244, 182 56, 182" fill = "green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">BOB</text></svg > ';`
    const newSVG = new SVG();
    const render = newSVG.render('BOB', 'red', 'Triangle', 'green');
    expect(render).toEqual(expectedSvg);
  });
});