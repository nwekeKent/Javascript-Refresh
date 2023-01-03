// Fundamental array operations
const testArr = [1, 2, 3, 4];
// --Insertion--
testArr.push(5); // returns [1,2,3,4,5]

// --Deletion--
testArr.pop(); // removes last element and returns it "5"

// --Access--
testArr[0]; // returns 1

// --Iteration--

// 1) For loop: loop runs until the condition passed is false.

for (let i = 0; i < testArr.length; i++) {
	console.log(testArr[i]); // prints 1,2,3,4
}

// 2) For  in loop: iterate using array indices.

for (let index in testArr) {
	console.log(index); // prints 0,1,2,3
}

// 3) For of  loop: iterate using array elements.

for (let ele of testArr) {
	console.log(ele); // prints 1,2,3,4
}

// 3) forEach loop: applies to all elements in the array. Can't break out of loop.

testArr.forEach((ele, index) => {
	console.log(ele * 2); // prints 2,4,6,8
});

// Helper Functions

// --Slice-- it can take 2 params: Start and End it omits the element at the end index.

testArr.slice(1, 2); //returns [2], test = [1,2,3,4]

// --Splice--
//.splice() takes three parameters: the beginning index, the size of things to be
//removed, and the new elements to add. New elements are added at the position
//specified by the first parameter. It returns the removed elements.

testArr.splice(1, 2, 5, 6, 7); //returns [2,3],array1 = [1,5,6,7,4]
