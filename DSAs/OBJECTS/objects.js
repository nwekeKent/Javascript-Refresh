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

console.log(example.sayName());
