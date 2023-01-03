# Number.EPSILON

Number.EPSILON returns the smallest interval between two representable numbers.
This is useful for the problem with floating-point approximation.
1 function numberEquals(x, y) {
2 return Math.abs(x - y) < Number.EPSILON;
3 } 45 numberEquals(0.1 + 0.2, 0.3); // true
This function works by checking whether the difference between the two numbers
are smaller than Number.EPSILON. Remember that Number.EPSILON is the smallest
difference between two representable numbers. The difference between 0.1+0.2 and 0.3
will be smaller than Number.EPSILON.

# Maximums

Number.MAX_SAFE_INTEGER returns the largest integer.
1 Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true

This returns true because it cannot go any higher. However, it does not work for
floating-point decimals.
1 Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022;
// false
Number.MAX_VALUE returns the largest floating-point number possible.
Number.MAX_VALUE is equal to 1.7976931348623157e+308.
1 Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
Unlike like Number.MAX_SAFE_INTEGER, this uses double-precision floating-point
representation and works for floating points as well.
1 Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true

# Minimums

Number.MIN*SAFE_INTEGER returns the smallest integer.
Number.MIN_SAFE_INTEGER is equal to -9007199254740991.
1 Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true
This returns true because it cannot get any smaller. However, it does not work for
floating-point decimals.
1 Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022;
// false
Number.MIN_VALUE returns the smallest floating-point number possible.
Number.MIN_VALUE is equal to 5e-324. This is not a negative number since it is the
smallest floating-point number possible and means that Number.MIN_VALUE is actually
bigger than Number.MIN*- SAFE_INTEGER.
Number.MIN_VALUE is also the closest floating point to zero.
1 Number.MIN_VALUE - 1 == -1; // true
This is because this is similar to writing 0 - 1 == -1

# SUMMARY

Recall that all numbers in JavaScript are in 32-bit floating point format. To get the
smallest possible floating point increment, you should use Number.EPILSON. The
maximum and minimum numbers of JavaScript can be summarized by the following
inequality:
-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0
< Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
Prime number validation and prime factorization are concepts used in various
computer science applications such as encryption, as covered in Chapter 4. Finally,
random number generation in JavaScript works via Math.random()
