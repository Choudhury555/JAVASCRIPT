// Polymorphism
// Child classes can override parent methods.
// Same method name → different behavior.
class Shape {
    area() {
        return 0;
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

const s = new Shape();
const c = new Circle(5);

console.log(s.area());  // 0
console.log(c.area()); // 78.53981633974483