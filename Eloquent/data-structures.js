// * Solutions to the exercises in the data-structures chapter

// 1 The sum of Range

// Range function that generates an array of numbers from start to end (inclusive) with an optional step
function range(start, end, step = 1) {
	const result = [];

	if (step > 0) {
		for (let i = start; i <= end; i += step) {
			result.push(i);
		}
	} else {
		for (let i = start; i >= end; i += step) {
			result.push(i);
		}
	}

	return result;
}

// Sum function that calculates the sum of an array of numbers
function sum(numbers) {
	return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(range(5, 2, -1));
