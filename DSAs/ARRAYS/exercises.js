// Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and
// a function for displaying the student’s grade average.

function studentGrades() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add(grade) {
	this.dataStore.push(grade);
}

function average() {
	const total = this.dataStore.reduce(function (a, b) {
		return a + b;
	}, 0);

	return total / this.dataStore.length;
}

const kent = new studentGrades();
kent.add(50);
kent.add(50);
console.log(kent.average());
