/*values():This method return an iterator that provides
the values for each index in the array. It takes no arguments.
*/
const arr= ['apple', 'banana', 'cherry'];
const iterator = arr.values();

for(const value of iterator){
    console.log(value);
}  //Output: apple banana cherry

/* length(): This property returns the length of the 
array.
*/
console.log(arr.length);
/*
reverse(): This method reverses the order of the element 
in the array
*/
arr.reverse();
console.log(arr);

/*
sort(): This method sorts the element of an array in place 
and returns the sorted  array.it can take an optional compare
function as an argument.
*/
arr.sort();
console.log(arr);

/*
at(): This method return the element at the specified
index in the array. It takes one argument: the index 
 */
console.log(arr.at(1));


/*
fill(): this method fills all the element of an array from 
a start index to an end index with a static value. It can 
take up to three arguments: the value to fill with, the start
index and the index. 
*/
arr.fill('orange',1,2);
console.log(arr);

/*
from():This menthod creates a new array from  an array 
like object or an iterable object. it can take up to two 
arguments the object to convert to array, and a mapping function 
to apply to each element of the new array.
*/
const obj = {0:'apple', 1: 'banana', 2: 'cherry', length:3}
const ar= Array.from(obj);
console.log(ar);

/*
join():This method joins all the elements of an array into 
a string using a spacied separator. It takes ones optional 
argument the separator to use
 */

// const str = arr.join(', ');
// console.log(str);


/*
toString(): This method returns a string representing the array
and its elements.
 */
const str = arr.toString();
console.log(str);
