// Creating an array

const jsObj = {};
const testArray = [1, 2, 3, 4];

jsObj.arr = testArray;

// console.log(jsObj); // { arr: [1,2,3,4]}

// * Prototypal Inheritance

function ExampleClass(name, size) {
	this.size = size;
	this.name = name;
}

const example = new ExampleClass("Tochi", 72);

ExampleClass.prototype.sayName = function () {
	console.log(this.name);
}; // example of prototypical inherirance ...using .prototype
// ?  Prototypical inheritance works by adding new functions to a JavaScript class via .prototype.

// example.sayName() prints Tochi

// * Classical inheritance with Object.create()

function Shape() {
	this.x = 0;
	this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
	console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
	Shape.call(this); // call super constructor.
}

// subclass extends superclass
// Inherits the superclass prototypes
Rectangle.prototype = Object.create(Shape.prototype, {
	// If you don't set Rectangle.prototype.constructor to Rectangle,
	// it will take the prototype.constructor of Shape (parent).
	// To avoid that, we set the prototype.constructor to Rectangle (child).
	constructor: {
		value: Rectangle,
		enumerable: false,
		writable: true,
		configurable: true,
	},
});

const rect = new Rectangle();

// console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
// console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
// rect.move(1, 1); // Logs 'Shape moved...'
