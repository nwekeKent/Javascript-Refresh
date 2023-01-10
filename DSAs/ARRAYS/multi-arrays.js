// Multi Dimensional arrays
var twod = [];

var rows = 5;
for (var i = 0; i < rows; ++i) {
	twod[i] = [];
}

// Better method to create a jagged array
const Matrix = (rows, columns) => {
	let jaggedarray = new Array(rows);
	for (let i = 0; i < columns; i += 1) {
		jaggedarray[i] = new Array(rows);
	}
	return jaggedarray;
};

// Matrix(3,3)  returns an array with 3 arrays each having a length of 3

const matrix3by3 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

matrix3by3[0][2]; // prints 3
