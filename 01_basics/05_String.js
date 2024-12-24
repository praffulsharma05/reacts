// const name = "hello"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`hello my name is ${name} and my repo count is $
//     {repoCount}`);


// const gameName = new String ('hiteshhc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('t'));


/***************************************String methods ****************************  */
/* SEARCHING
indexOf(searchValue[, fromIndex])
Returns the index of the first occurrence of the specified value, or -1 if not found.
*/

// let str = "hello";
// console.log(str.indexOf("e")); // Output: 1

/*
lastIndexOf(searchValue[, fromIndex])
Returns the index of the last occurrence of the specified value, or -1 if not found.
*/

// let str1 = "hello world";
// console.log(str1.lastIndexOf("o")); // Output: 7


/*
includes(searchValue[, start])
Checks if the string contains the specified value.
*/

// let str = "hello";
// console.log(str.includes("ll")); // Output: true


/*
startsWith(searchValue[, start])
Checks if the string starts with the specified value.
*/

// let str = "hello";
// console.log(str.startsWith("he")); // Output: true

/*
endsWith(searchValue[, length])
Checks if the string ends with the specified value.
 */

// let str = "hello";
// console.log(str.endsWith("lo")); // Output: true



/*
Case Conversion
toUpperCase()
Converts the string to uppercase.
*/

// let str = "hello";
// console.log(str.toUpperCase()); // Output: "HELLO"


/*
toLowerCase()
Converts the string to lowercase.
*/

// let str = "HELLO";
// console.log(str.toLowerCase()); // Output: "hello"


/*
                             Length and Character Access
length
Returns the length of the string.
*/

// let str = "hello";
// console.log(str.length); // Output: 5

/*
charAt(index)
Returns the character at the specified index.
*/

// let str = "hello";
// console.log(str.charAt(1)); // Output: "e"

/*
charCodeAt(index)
Returns the Unicode value of the character at the specified index.
*/
// let str = "hello";
// console.log(str.charCodeAt(1)); // Output: 101


/*
at(index) (ES2022+)
Returns the character at the specified index (supports negative indexing).
*/
// let str = "hello";
// console.log(str.at(-1)); // Output: "o"


/*
Substring and Slicing
slice(beginIndex[, endIndex])
Extracts a section of the string.
*/

// let str = "hello";
// console.log(str.slice(1, 4)); // Output: "ell"

/*
substring(startIndex[, endIndex])
Similar to slice, but does not support negative indexes.
*/

// let str1 = "hello";
// console.log(str1.substring(1, 4)); // Output: "ell"



/*
substr(start[, length]) (Deprecated)
Extracts a substring based on a start index and length.
*/

// let str = "hello";
// console.log(str.substr(1, 3)); // Output: "ell"

 
 
// Length and Character Access
// length
// Returns the length of the string.
// let str = "hello";
// console.log(str.length); // Output: 5


// charAt(index)
// Returns the character at the specified index.

 
// let str = "hello";
// console.log(str.charAt(1)); // Output: "e"



// charCodeAt(index)
// Returns the Unicode value of the character at the specified index.
 
// let str = "hello";
// console.log(str.charCodeAt(1)); // Output: 101

// at(index) (ES2022+)
// Returns the character at the specified index (supports negative indexing).

 
 
// let str = "hello";
// console.log(str.at(-1)); // Output: "o"

// Searching
// indexOf(searchValue[, fromIndex])
// Returns the index of the first occurrence of the specified value, or -1 if not found.
 
// let str = "hello";
// console.log(str.indexOf("e")); // Output: 1


// lastIndexOf(searchValue[, fromIndex])
// Returns the index of the last occurrence of the specified value, or -1 if not found.

 
// let str = "hello world";
// console.log(str.lastIndexOf("o")); // Output: 7

// includes(searchValue[, start])
// Checks if the string contains the specified value

 
// let str = "hello";
// console.log(str.includes("ll")); // Output: true


// startsWith(searchValue[, start])
// Checks if the string starts with the specified value.

 
// let str = "hello";
// console.log(str.startsWith("he")); // Output: true




// endsWith(searchValue[, length])
// Checks if the string ends with the specified value.

 
// let str = "hello";
// console.log(str.endsWith("lo")); // Output: true




// Substring and Slicing
// slice(beginIndex[, endIndex])
// Extracts a section of the string.

 
// let str = "hello";
// console.log(str.slice(1, 4)); // Output: "ell"



// substring(startIndex[, endIndex])
// Similar to slice, but does not support negative indexes.
 
// let str = "hello";
// console.log(str.substring(1, 4)); // Output: "ell"


// substr(start[, length]) (Deprecated)
// Extracts a substring based on a start index and length.

 
// let str = "hello";
// console.log(str.substr(1, 3)); // Output: "ell"




// Replacing
// replace(searchValue, newValue)
// Replaces the first occurrence of a value.

 
// let str11 = "hello world";
// console.log(str11.replace("world", "JavaScript")); // Output: "hello JavaScript"



// replaceAll(searchValue, newValue) (ES2021+)
// Replaces all occurrences of a value.

 
// let str10 = "hello world, hello!";
// console.log(str10.replaceAll("hello", "hi")); // Output: "hi world, hi!"


// Trimming
// trim()
// Removes whitespace from both ends of the string.



// let str9 = "  hello  ";
// console.log(str9.trim()); // Output: "hello"


// trimStart() / trimLeft()
// Removes whitespace from the start of the string.

 
// let str8 = "  hello";
// console.log(str8.trimStart()); // Output: "hello"


// trimEnd() / trimRight()
// Removes whitespace from the end of the string.


// let str7 = "hello  ";
// console.log(str7.trimEnd()); // Output: "hello"



// Splitting and Joining
// split(separator[, limit])
// Splits the string into an array using the specified separator.

 
// let str6 = "a,b,c";
// console.log(str6.split(",")); // Output: ["a", "b", "c"]


// concat(...strings)
// Concatenates the string with other strings.
 
// let str1 = "hello";
// let str2 = "world";
// console.log(str1.concat(" ", str2)); // Output: "hello world"


// Checking Properties
// isNaN() (Used with numbers)
// Checks if the string represents a non-numeric value.
 



// let str3 = "123";
// console.log(isNaN(str3)); // Output: false



// Other Utility Methods
// repeat(count)
// Repeats the string count times.

 
// let str4 = "hello";
// console.log(str4.repeat(3)); // Output: "hellohellohello"

// toLocaleUpperCase() / toLocaleLowerCase()
// Converts the string to upper/lower case considering the host locale.

// let str5 = "hello";
// console.log(str5.toLocaleUpperCase()); // Output: "HELLO"

 
 
const url = "https://prafful.com/prafful%20sharma"

console.log(url.replace('%20', '-'))
console.log(url.includes('prafful'))
console.log(url.includes('sunder'))


console.log();

