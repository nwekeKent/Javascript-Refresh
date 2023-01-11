// FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER

// Time complexity: o(n^2)
const findSum = (arr, target) => {
	for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
		for (let j = i + 1; j < arrLength; j++) {
			if (arr[i] + arr[j] == target) {
				return [i, j];
			}
		}
	}
	return -1;
};

// console.log(findSum([1, 2, 3, 4, 5], 6));

// Using HashTable

function findSumBetter(arr, weight) {
	var hashtable = {};

	for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
		var currentElement = arr[i],
			difference = weight - currentElement;

		// check the right one already exists
		if (hashtable[difference]) {
			return [i, hashtable[weight - currentElement]];
		} else {
			// store index
			hashtable[difference] = i;
		}
	}
	return -1;
}

// Median of array
function medianOfArray(arr) {
	let len = arr.length;

	if (len % 2 == 1) {
		return arr[Math.floor(len / 2)];
	} else {
		return (arr[len / 2] + arr[len / 2 - 1]) / 2;
	}
}

// Median of two
