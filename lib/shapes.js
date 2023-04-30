// Base class for shapes
class Shape {
    constructor(shapeFillColor, textY, textFillColor) {
        this.shapeFillColor = shapeFillColor;
        this.textY = textY;
        this.textFillColor = textFillColor;
    }
}

class Circle extends Shape {
    constructor(shapeFillColor, textY, textFillColor, circle) {
        super(shapeFillColor, textY, textFillColor);
        this.circle = circle;
    }
}

class Triangle extends Shape {
    constructor(shapeFillColor, textY, textFillColor, triangle) {
        super(shapeFillColor, textY, textFillColor);
        this.triangle = triangle;
    }
}

class Square extends Shape {
    constructor(shapeFillColor, textY, textFillColor, square) {
        super(shapeFillColor, textY, textFillColor);
        this.square = square;
    }
}

module.exports = { Circle, Triangle, Square };
