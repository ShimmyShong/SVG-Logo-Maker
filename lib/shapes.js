// Base class for shapes
class Shape {
    constructor(text, shapeFillColor, textFillColor, textY) {
        this.text = text;
        this.shapeFillColor = shapeFillColor;
        this.textY = textY;
        this.textFillColor = textFillColor;
    }
}

class Circle extends Shape {
    constructor(text, shapeFillColor, textY, textFillColor, template) {
        super(text, shapeFillColor, textY, textFillColor);
        this.template = `<circle cx="150" cy="100" r="80" fill="${this.shapeFillColor}" />` // these are the largest differences between how shapes are made with svgs
        this.textY = 125;
    }
}

class Triangle extends Shape {
    constructor(text, shapeFillColor, textY, textFillColor, template) {
        super(text, shapeFillColor, textY, textFillColor);
        this.template = `<rect x="90" y="40" width="120" height="120" fill="${this.shapeFillColor}" />`
        this.textY = 125;
    }
}

class Square extends Shape {
    constructor(text, shapeFillColor, textY, textFillColor, template) {
        super(text, shapeFillColor, textY, textFillColor);
        this.template = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeFillColor}" />`
        this.textY = 150;
    }
}

module.exports = { Circle, Triangle, Square };
