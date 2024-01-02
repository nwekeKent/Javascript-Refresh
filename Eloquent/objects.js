// * Solutions to the exercises in the objects chapter

/* Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).*/

class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(otherVector) {
		return new Vec(this.x + otherVector.x, this.y + otherVector.y);
	}

	minus(otherVector) {
		return new Vec(this.x - otherVector.x, this.y - otherVector.y);
	}

	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

const vector1 = new Vec(3, 4);
const vector2 = new Vec(1, 2);

const sumVector = vector1.plus(vector2);
console.log(sumVector);
