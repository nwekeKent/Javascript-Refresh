// FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER

const findSum = (arr, target) => {
	for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
		for (var j = i + 1; j < arrLength; j++) {
			if (arr[i] + arr[j] == target) {
				return [i, j];
			}
		}
	}
	return -1;
};

console.log(findSum([1, 2, 3, 4, 5], 6));
