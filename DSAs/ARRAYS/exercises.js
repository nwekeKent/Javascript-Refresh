// Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and
// a function for displaying the student’s grade average.

class StudentGrades {
	constructor() {
		this.dataStore = [];
		this.add = add;
		this.average = average;
	}
}

function add(grade) {
	this.dataStore.push(grade);
}

function average() {
	const total = this.dataStore.reduce(function (a, b) {
		return a + b;
	}, 0);

	return Math.round(total / this.dataStore.length);
}

// 2. Store a set of words in an array and display the contents both forward and backward.

const word = "This is the way to go";
const wordArr = word.split(" ");
wordArr.reverse();
console.log(wordArr);
