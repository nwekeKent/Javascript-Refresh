// ! A List Implementation

function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; // initializes an empty array to store list elements
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	// this.front = front;
	// this.end = end;
	// this.prev = prev;
	// this.next = next;
	// this.length = length;
	// this.currPos = currPos;
	// this.moveTo = moveTo;
	// this.getElement = getElement;
	// this.length = length;
	this.contains = contains;
}

// * Adding element to a list
function append(element) {
	this.dataStore[this.listSize++] = element;
}

// * Remove an element

// ? we first have to find the element we want to remove

function find(element) {
	for (let i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

// ? Then we remove it
function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

// * Get Number of elements in a list.

function length() {
	return this.listSize;
}

// * Retrieving a List's elements
function toString() {
	return this.dataStore;
}

//  this function returns an array object and not a string, but its utility is
// in providing a view of the current state of an object, and just returning the array works
// adequately for this purpose.

// * Inserting an element

function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

//insert() uses the helper function find() to determine the correct insertion position
//for the new element by finding the element specified in the after argument. Once this
//position is found, we use shift() to insert the new element into the list. Then we
// increment listSize by 1 and return true to indicate the insertion was successful.}

// * Removing all elements in an array

function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

// * Checking if an element is present in a list

function contains(element) {
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return !true;
		}
	}
	return false;
}

// * Traversing a list:
