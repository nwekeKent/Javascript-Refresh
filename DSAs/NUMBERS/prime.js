// Check if a number is a prime number

const isPrime = n => {
	// check if the number is 1 OR LESS

	if (n <= 1) {
		return false;
	}

	// check from 2 to n-1 to see if any other  number from 2 to n-1 can divide n without remainder (not prime)
	for (let i = 2; i < n; i++) {
		if (n % i == 0) {
			return false;
		}
	}

	return true;
};

// Time Complexity == O(n) cos if checks all number to n

isPrime(15); // prints false

// Better Alternative to reduce the time complexity

const isBetterPrime = n => {
	if (n <= 1) return false;
	// if 2 or 3
	if (n <= 3) return true;

	// if n is not 1 or 2 or 3 and is divisible by 2 or 3, it is not prime.
	if (n % 2 == 0 || n % 3 == 0) return false;

	for (let i = 5; i * i <= n; i = i + 6) {
		if (n % i == 0 || n % (i + 2) == 0) return false;
	}

	return true;
};

// print prime factors of a given number.

const primeFactors = n => {
	// Print the number of 2s that divide n if n is an even number
	while (n % 2 == 0) {
		console.log(2);
		n = n / 2;
	}

	// n must be odd at this point. So we can skip one element
	// Note i = i +2 (for odd numbers)
	for (let i = 3; i * i <= n; i = i + 2) {
		// While i divides n, print i and divide n
		while (n % i == 0) {
			console.log(i);
			n = n / i;
		}
	}

	// This condition is to handle the case when n is a prime number  greater than 2
	if (n > 2) {
		console.log(n);
	}
};

// print alll prime numbers less than n

function allPrimesLessThanN(n) {
	for (let i = 0; i < n; i++) {
		if (isBetterPrime(i)) {
			console.log(i);
		}
	}
}
