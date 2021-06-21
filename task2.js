const shape = {
   area() {
      return this.a * this.b
   },

   perimeter() {
      return this.a * 2 + this.b * 2
   }
}

function Rectangle(a, b) {
   this.a = a
   this.b = b
}

function Square(a) {
   this.a = a
   this.b = a
}

Square.prototype = shape
Rectangle.prototype = shape


const rectangle1 = new Rectangle(3, 4)
const square1 = new Square(3)

console.log(rectangle1.area())
console.log(rectangle1.perimeter())
console.log(square1.area())
console.log(square1.perimeter())