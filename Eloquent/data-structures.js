// * Solutions to the exercises in the data-structures chapter

// 1 The sum of Range

function range(start, end, step) {
	let rangeArray = [];

	if (step) {
		for (let i = start; i <= end; i += step) {
			rangeArray.push(i);
		}
	} else {
		for (let i = start; i <= end; i++) {
			rangeArray.push(i);
		}
	}

	return rangeArray;
}

console.log(range(1, 10, -1));

function sum(arr) {
	let sum = 0;

	for (element of arr) {
		sum += element;
	}

	return sum;
}

console.log(sum(range(1, 10)));
