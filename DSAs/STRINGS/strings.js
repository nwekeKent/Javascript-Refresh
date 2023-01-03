const testStr = "Youtube";
const longerStr = "Youtube is one hell of a uni";

// ACCESSING CHRACTERS IN A STRING.

// To get the character at a specific index
testStr.charAt(0); // returns 'Y'

// for multiple characters, .substring is used. startindex is included

testStr.substring(1, 4); // returns "out"
testStr.substring(3); // returns "tube"

//STRING SEARCH

//.indexof(searchvalue, fromIndex) -1 is returned is string is not found

console.log(longerStr.indexOf("hell", 16));
