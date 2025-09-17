// Polymorphism Example (Shapes)
class Shape {
    area() {
        return 0;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

const shapes = [new Square(4), new Circle(3)];
shapes.forEach(s => console.log(s.area()));//16 and 28.274333882308138