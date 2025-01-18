/*values():This method return an iterator that provides
the values for each index in the array. It takes no arguments.
*/
const arr= ['apple', 'banana', 'cherry'];
// const iterator = arr.values();

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
// arr.sort();
// console.log(arr);

/*
at(): This method return the element at the specified
index in the array. It takes one argument: the index 
 */
// console.log(arr.at(1));


/*
fill(): this method fills all the element of an array from 
a start index to an end index with a static value. It can 
take up to three arguments: the value to fill with, the start
index and the index. 
*/
// arr.fill('orange',1,2);
// console.log(arr);

/*
from():This menthod creates a new array from  an array 
like object or an iterable object. it can take up to two 
arguments the object to convert to array, and a mapping function 
to apply to each element of the new array.
*/
// const obj = {0:'apple', 1: 'banana', 2: 'cherry', length:3}
// const ar= Array.from(obj);
// console.log(ar);

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
 
/*
pop(): This method remove the last element from an array 
and returns that element  */
const last = arr.pop();
console.log(last);
console.log(arr);

/*
forEach(): method executes a provided function once for each 
array element. it doesn't return anything, it just executes the
callback function on each element of the array. 
 */
let fruits = ['apple', 'banana', 'cherry']
// fruits.forEach(function (item){
//     console.log(item);
// });

/*
shift(): method removes the first element from 
an array and returns that removed element. This 
method changes the length of the array.
*/

// let shiftfruit = fruits.shift();
// console.log(shiftfruit);
// console.log(fruits);

/*
copyWithin(): method shallow copies part of an 
array to another location in the same array and return 
the modified array without modifying its length. syntax.copyWithIn(target, start, end)
 */

// let numbers = [1, 2, 3, 4, 5];
// numbers.copyWithin(2, 0, 2);
// console.log(numbers);

/*
push(): method adds one or more elements to the end of an array
and of an array and returns the new length of the array. */
// fruits.push('cherry', 'orange');
// console.log(fruits);

/*
unshift(): method adds one or more elements to the begining of 
an array and return  the new length of the array.
*/
fruits.unshift('apple', 'banana');
console.log(fruits);

/*
concat(): method is used to merge two or more arrays. 
this method does not change the existing arrays, but
instead returns a new array. */
let morefruits = ['cherry', 'orange'];
let allfruits = fruits.concat(morefruits);
console.log(allfruits);

/*
splice(): method changes the contents of an array
by removing or replacing existing element and/or addding 
new elements in place */
fruits.splice(2, 1, 'mango', 'kiwi');  //splice(start, deleteCount, item1_ _ _ _ _ _ _ _ itemN)
console.log(fruits);

/*
flat(): This method creates a new array with all
sub-array elements concatenated into it recursively
up to the specified depth */
const num = [1, [2, [3]],4];
const flatnum = num.flat(Infinity);
console.log(flatnum);

/*
lastIndexOf(): This method returns the last index at
which a given element can be found in the array.*/

const num1 =[1,2,3,4,5,3];
const lastIndexOf = num1.lastIndexOf(3);
console.log(lastIndexOf);

/*
indexOf(): This method return the index of the first 
occurance of a specified element is not present, it returns -1*/
const ars = [5,10,15,20];
// const index = ars.indexOf(10);
// console.log(index); //1

/* 
Of(): This mthod create a new array instance with a variable 
number of arguments regardless of numbers or types of the arguments 
*/ 
const arw = Array.of(1,2,3, "four", true);
console.log(arw);

/*
every(): This method checks if all elements in an array pass a test. It return 
false */
const ard = [2,4,6,8];
const isEven = (num )=> num %2 === 0;
// const result = ard.every(isEven);
// console.log(result);

/*
flatMap(): This  methods maps each elements using a mapping function, 
then flattens the results into a new array*/
// const arf =[1,2,3];
// const result = arf.flatMap(x => [x * 2])
// console.log(result);

/*
findIndex():  This method returns the index of the first 
element in an array that passes a test. If no element passes 
the test, it return -1
 */
// const ass= [10,20,30,40,50];
// const greaterThan30 = (num) => num  > 30;
// const index = ass.findIndex(greaterThan30)
// console.log(index);

/*
find(): This methods return the values of the
first element in an array that passes a test it 
return undefined.*/
const aww = [10,20,30,40,50];
// const greaterThan30 = (num)=> num >30
// const result = aww.find(greaterThan30);
// console.log(result);

/*
induces(): This method determines  whether an array
includes a certain values among its entries returning
true or false as appropriate.
*/
const has20 = aww.includes(20);
console.log(has20);

/*
entries(): This method return a new Array iterator
object that contains the key/values pairs for each index 
in the array */
const a = ["a", "b", "c"];
const iterator = a.entries();
console.log(iterator.next().value);
