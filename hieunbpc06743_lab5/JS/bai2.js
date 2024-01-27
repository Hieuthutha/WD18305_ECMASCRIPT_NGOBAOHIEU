class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
const myShape = new Shape(0, 0);
myShape.move(19, 8);
console.log(myShape.x, myShape.y);
