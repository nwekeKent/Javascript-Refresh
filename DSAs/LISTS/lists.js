// ! A List Implementation

function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; // initializes an empty array to store list elements
	// this.clear = clear;
	this.find = find;
	this.toString = toString;
	// this.insert = insert;
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
	// this.contains = contains;
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

const names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());
