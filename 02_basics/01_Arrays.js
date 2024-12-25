// const arr = [0, 1, 2, 3, 4, 5]


// console.log(arr);
 

//***************************Arrays******************************************************* */
/*
In JavaScript, an array is a special data structure that can hold a collection of values,
 such as numbers, strings, objects, or even other arrays. Arrays are ordered and indexed,
 starting from 0. Here’s a quick overview of arrays in JavaScript:
 */

 //Creating Arrays
//Using array literals:

// const numbers = [1, 2, 3, 4, 5];
// const fruits = ['apple', 'banana', 'cherry'];

//Using the Array constructor:
// const numbers1 = new Array(1, 2, 3, 4, 5); // Equivalent to [1, 2, 3, 4, 5]
// const emptyArray = new Array(3); // Creates an array with 3 empty slots


/*
Accessing Array Elements
You can access elements using their index:
*/
// const fruits1 = ['apple', 'banana', 'cherry'];
// console.log(fruits1[0]); // Outputs: 'apple'
// console.log(fruits1[1]); // Outputs: 'banana'


/*
Common Array Methods
Adding/Removing Elements:

push(): Adds elements to the end.
pop(): Removes the last element.
unshift(): Adds elements to the beginning.
shift(): Removes the first element.
*/

// const fruits2 = ['apple', 'banana'];
// fruits2.push('cherry'); // ['apple', 'banana', 'cherry']
// fruits2.pop();          // ['apple', 'banana']
// fruits2.unshift('grape'); // ['grape', 'apple', 'banana']
// fruits2.shift();        // ['apple', 'banana']


/*
Finding Elements:

indexOf(): Finds the index of a value.
includes(): Checks if a value exists.
*/
// const fruits3 = ['apple', 'banana', 'cherry'];
// console.log(fruits3.indexOf('banana')); // Outputs: 1
// console.log(fruits3.includes('grape')); // Outputs: false

/*
Transforming Arrays:

map(): Transforms each element.
filter(): Filters elements based on a condition.
reduce(): Reduces the array to a single value.
*/
// const number = [1, 2, 3, 4];
// const doubled = number.map(num => num * 2); // [2, 4, 6, 8]
// const even = number.filter(num => num % 2 === 0); // [2, 4]
// const sum = number.reduce((acc, num) => acc + num, 0); // 10


/*
Sorting and Reversing:

sort(): Sorts the array.
reverse(): Reverses the order of elements.
 */

// const fruit = ['cherry', 'banana', 'apple'];
// fruit.sort(); // ['apple', 'banana', 'cherry']
// fruit.reverse(); // ['cherry', 'banana', 'apple']


/*
Joining and Splitting:

join(): Converts an array to a string.
split(): Converts a string to an array (used with String).
*/

// const fruit1 = ['apple', 'banana', 'cherry'];
// console.log(fruit1.join(', ')); // Outputs: 'apple, banana, cherry'


/*
Iterating Over Arrays
Using a for loop:
*/

// const fruit2 = ['apple', 'banana', 'cherry'];
// for (let i = 0; i < fruit2.length; i++) {
//     console.log(fruit2[i]);
// }


// Using for...of:

 
// for (const fruit of fruits) {
//     console.log(fruit);
// }



// Using forEach():

 
// fruits.forEach(fruit => console.log(fruit));


// Multidimensional Arrays
// Arrays can hold other arrays, creating a multidimensional structure:

 
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[1][2]); // Outputs: 6


/*
JavaScript arrays come with a rich set of built-in methods to manipulate, transform, 
and query arrays. Below is a categorized list of commonly used array methods:
*/

/*
Adding and Removing Elements
push() - Adds elements to the end of the array.
*/
// const arr = [1, 2];
// arr.push(3); // [1, 2, 3]

//pop() - Removes the last element from the array.
// const arr = [1, 2, 3];
// arr.pop(); // [1, 2]
// console.log(arr);


//unshift() - Adds elements to the beginning of the array.
// const arr = [1, 2];
// arr.unshift(0); // [1, 2, 3]
// console.log(arr);

//shift() - Removes the first element from the array.
// const arr = [1, 2, 3];
// arr.shift(); // [2, 3]
// console.log(arr);


//splice(start, deleteCount, ...items) - Removes or replaces existing elements and/or adds new elements.
// const arr = [1, 2, 3, 4];
// arr.splice(1, 1, 99); // [1, 99, 4] note: 1 is a INDEX no liya and 1 jo liya usko replace kiya sirf one value ko  
// console.log(arr);

//slice(start, end) - Returns a shallow copy of a portion of an array.
// const arr = [1, 2, 3, 4];
// const subArray = arr.slice(1, 3); // [2, 3]
// console.log(subArray);


//Searching and Finding Elements
//indexOf() - Returns the first index of a specified element, or -1 if not found.

// const arr = [1, 2, 3];
// arr.indexOf(2); // 1
// console.log(arr);


//lastIndexOf() - Returns the last index of a specified element.
// const arr = [1, 2, 3, 4];//i can't understand
// arr.lastIndexOf(2); // 3
// console.log(arr)

//includes() - Checks if an array contains a specified element.

// const arr = [1, 2, 3];
// const a=arr.includes(2); // true
// console.log(a);


//find(callback) - Returns the first element that satisfies a condition.
// const arr = [1, 2, 3, 4];
// const found = arr.find(x => x > 2); // 3
// console.log(found);


// findIndex(callback) - Returns the index of the first element that satisfies a condition.
// const arr = [1, 2, 3, 4];
// const index = arr.findIndex(x => x > 2); // 2
// console.log(index);


//Transforming Arrays
//map(callback) - Creates a new array by transforming each element.
 
// const arr = [1, 2, 3];
// const squared = arr.map(x => x * x); // [1, 4, 9]
// console.log(squared);


//filter(callback) - Creates a new array with elements that satisfy a condition.

// const arr = [1, 2, 3, 4];
// const evens = arr.filter(x => x % 2 === 0); // [2, 4]
// console.log(evens);

//reduce(callback, initialValue) - Reduces the array to a single value.
// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, curr) => acc + curr, 0); // 6 // i dont understand this 
// console.log(sum);


//reduceRight(callback, initialValue) - Similar to reduce, but processes from right to left.

//flat(depth) - Flattens nested arrays up to a specified depth.
// const arr = [1, [2, [3, 4]]];
// const flatArr = arr.flat(2); // [1, 2, 3, 4]//i dont understand
// console.log(flatArr);


//flatMap(callback) - Maps and flattens the result in one step.

// const arr = [1, 2, 3];
// const result = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
// console.log(result);




// JavaScript arrays come with a rich set of built-in methods to manipulate, transform, and query arrays. Below is a categorized list of commonly used array methods:

// Adding and Removing Elements
// push() - Adds elements to the end of the array.
// const arr = [1, 2];
// arr.push(3); // [1, 2, 3]



// pop() - Removes the last element from the array.
// const arr = [1, 2, 3];
// arr.pop(); // [1, 2]



// unshift() - Adds elements to the beginning of the array.
// const arr = [2, 3];
// arr.unshift(1); // [1, 2, 3]
// shift() - Removes the first element from the array.

// javascript
// Copy code
// const arr = [1, 2, 3];
// arr.shift(); // [2, 3]
// splice(start, deleteCount, ...items) - Removes or replaces existing elements and/or adds new elements.

 
// const arr = [1, 2, 3, 4];
// arr.splice(1, 2, 99); // [1, 99, 4]


// slice(start, end) - Returns a shallow copy of a portion of an array.
// const arr = [1, 2, 3, 4];
// const subArray = arr.slice(1, 3); // [2, 3]




// Searching and Finding Elements
// indexOf() - Returns the first index of a specified element, or -1 if not found.
// const arr = [1, 2, 3];
// arr.indexOf(2); // 1



// lastIndexOf() - Returns the last index of a specified element.
// const arr = [1, 2, 3, 2];
// arr.lastIndexOf(2); // 3



// includes() - Checks if an array contains a specified element.
// const arr = [1, 2, 3];
// arr.includes(2); // true


// find(callback) - Returns the first element that satisfies a condition.
// const arr = [1, 2, 3, 4];
// const found = arr.find(x => x > 2); // 3


// findIndex(callback) - Returns the index of the first element that satisfies a condition.
// const arr = [1, 2, 3, 4];
// const index = arr.findIndex(x => x > 2); // 2

// Transforming Arrays
// map(callback) - Creates a new array by transforming each element.
// const arr = [1, 2, 3];
// const squared = arr.map(x => x * x); // [1, 4, 9]


// filter(callback) - Creates a new array with elements that satisfy a condition.
// const arr = [1, 2, 3, 4];
// const evens = arr.filter(x => x % 2 === 0); // [2, 4]


// reduce(callback, initialValue) - Reduces the array to a single value.
// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, curr) => acc + curr, 0); // 6



// reduceRight(callback, initialValue) - Similar to reduce, but processes from right to left.
// flat(depth) - Flattens nested arrays up to a specified depth.
// const arr = [1, [2, [3, 4]]];
// const flatArr = arr.flat(2); // [1, 2, 3, 4]


// flatMap(callback) - Maps and flattens the result in one step.
// const arr = [1, 2, 3];
// const result = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]



// Sorting and Reordering
// sort(compareFunction) - Sorts the array 
// const arr = [3, 1, 2];
// arr.sort((a, b) => a - b); // [1, 2, 3]



// reverse() - Reverses the order of- elements.
// const arr = [1, 2, 3];
// arr.reverse(); // [3, 2, 1]


// Combining Arrays
// concat(...arrays) - Combines arrays and/or values. 
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = arr1.concat(arr2); // [1, 2, 3, 4]


// join(separator) - Joins array elements into a string.
// const arr = [1, 2, 3];
// const str = arr.join('-'); // "1-2-3"

 


// Iterating Over Arrays
//forEach(callback) - Executes a function for each array element.
// const arr = [1, 2, 3];
// arr.forEach(x => console.log(x)); // Logs 1, 2, 3



// entries() - Returns an iterator of [index, value] pairs.

 
// const arr = ['a', 'b'];
// for (const [index, value] of arr.entries()) {
//     console.log(index, value); // Logs: 0 'a', 1 'b'
// }
// keys() - Returns an iterator for array indices.

// values() - Returns an iterator for array values.

// Other Useful Methods
// Array.isArray(value) - Checks if a value is an array.
// Array.isArray([1, 2, 3]); // true


// length - Returns or sets the number of elements in the array.
// const arr = [1, 2, 3];
// console.log(arr.length); // 3


/*This list covers the most common methods for working\
 with arrays in JavaScript. Let me know if you’d like 
detailed examples or explanations for specific methods!*/

/*
In JavaScript, arrays are a type of data structure used to store multiple values
 in a single variable. An array is an ordered list where each element is indexed 
 starting from 0. Arrays can hold values of any data type, including numbers,
  strings, objects, and even other arrays.
*/

/*
javaScript arrays can not be associative arrays and so, array element
connot be accessed using arbitrary strings as indexs, but must be
accessed using nonnegative integers as indexes.

*Zereo-based index

*create shallow copies of an object is a copy whose properties 
share same reference as those of source object from which the copy 
was made.

*deep copies of an object is copy whose properties do not share the samew reference
(point to the samew underlying values) 
a deep copy of an array creates a new array with its own copy of the original elements.
 If the array contains nested objects or arrays, the deep copy duplicates those as well,
 ensuring no shared references with the original array.

 *Shallow Copy vs Deep Copy:
-Shallow Copy only duplicates the top level of the array and references 
the nested objects or arrays (e.g., Array.slice() or spread operator).
-Deep Copy duplicates all levels, ensuring no shared references.

*Choose the Right Method:
-Use structuredClone() for simplicity and modern use.
-Use JSON.stringify() for basic objects/arrays without special data types.
-Use Lodash for robust deep copying if dealing with complex structures.
*/ 


// . Using structuredClone() (Modern and Fast)
// The structuredClone() function creates a deep copy of an array, including all nested structures.

 
// let original = [1, 2, { a: 10, b: 20 }];
// let deepCopy = structuredClone(original);

// deepCopy[2].a = 100; // Modifying the deep copy does not affect the original
// console.log(original); // [1, 2, { a: 10, b: 20 }]
// console.log(deepCopy); // [1, 2, { a: 100, b: 20 }]

//------------------------------------------------------------------------------------------------------//
// 2. Using JSON.parse(JSON.stringify())
// This method works for most cases but fails for special data types like Date, Set, Map, or functions.

 
// let original = [1, 2, { a: 10, b: 20 }];
// let deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy[2].b = 200;
// console.log(original); // [1, 2, { a: 10, b: 20 }]
// console.log(deepCopy); // [1, 2, { a: 10, b: 200 }]

//----------------------------------------------------------------//

// 3. Using Recursive Functions
// Manually create a deep copy by recursively copying each element.
 
// function deepCopyArray(array) {
//   return array.map(item => 
//     Array.isArray(item) 
//       ? deepCopyArray(item) 
//       : (typeof item === 'object' && item !== null) 
//         ? { ...deepCopyArray(item) } 
//         : item
//   );
// }

// let original = [1, [2, 3], { a: 10, b: [4, 5] }];
// let deepCopy = deepCopyArray(original);

// deepCopy[1][0] = 99;
// deepCopy[2].b[1] = 500;

// console.log(original); // [1, [2, 3], { a: 10, b: [4, 5] }]
// console.log(deepCopy); // [1, [99, 3], { a: 10, b: [4, 500] }]


//--------------------------------------------------------------------------//

// 4. Using Libraries (e.g., Lodash)
// Lodash provides a reliable cloneDeep() function for deep copying complex structures.
// Install Lodash: npm install lodash
// const _ = require('lodash');

// let original = [1, 2, { a: 10, b: 20 }];
// let deepCopy = _.cloneDeep(original);

// deepCopy[2].a = 100;
// console.log(original); // [1, 2, { a: 10, b: 20 }]
// console.log(deepCopy); // [1, 2, { a: 100, b: 20 }]

const myArr = new Array(0,1,2,3,4)
// console.log(myArr[1]);
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);



 