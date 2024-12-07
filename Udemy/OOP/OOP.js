// Object oriented programming

// Factory Functions. using functions to create objects

function createElf(name, weapon) {
	return {
		name,
		weapon,
		attack() {
			return `attack with ${weapon}`;
		},
	};
}

const peter = createElf("Peter", "Ak47");
console.log(peter.attack());

// Object.create()

const elfFunctions = {
	attack() {
		return `attack with ${weapon}`;
	},
};

function createElf2(name, weapon) {
	let newElf = Object.create(elfFunctions);
	newElf.name = name;
	newElf.weapon = weapon;
	return newElf;
}

const sam = createElf2("Sam", "stones");
sam.attack();

// Constructor Functions

function Elf(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

Elf.prototype.attack = function () {
	return `attack with ${this.weapon}`;
};

const paul = new Elf("Paul", "sword");
paul.attack();
