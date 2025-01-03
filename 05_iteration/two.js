// let index = 0
// while(index <=10){
//     console.log(`Values of index is ${index}`);
//     index = index +2
// }
// let myArray = ["flash", "batman", "superman"]
// let arr = 0
// while(arr < myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr +1
// }
// let score = 11   
// do{console.log(`score is ${score}`);
// score++
// }while(score<=10)




// for of loop 

//["","",""]
//[{},{},{}]

// const arr = [1,2,3,4,5]  // for object and string also 

// for(const num of arr){
//     console.log(num);
// }

// const greating = "hello world!"
// for(const great of greating){
//     console.log(great);
// }


//Maps     maps are show uniqe value

const map = new Map()
map.set('IN', "iNDIA")
map.set('USA', "United States of America")
map.set('Fr', "france")

console.log(map);
for(const [key, value] of map){
    console.log(key, ':-',value);
}

// const myObject = {            // myObject is not iterable
//     'game1': 'NFS',
//     'game2': 'SpiderMan'
// }
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }

/*
#for...of
Purpose: Iterates over the values of iterable objects such as arrays, strings, maps, sets, or other objects implementing the iterable protocol.
Use case: When you need the values of an iterable.

const array = ['a', 'b', 'c'];
for (const value of array) {
    console.log(value); // Output: a, b, c
}
    Key Points:
Works with any iterable (e.g., arrays, strings, sets, maps).
Does not work with objects directly.


#for...in
Purpose: Iterates over the keys (or property names) of an object or the indexes of an array.
Use case: When you need the keys/properties of an object.

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key); // Output: a, b, c
}
Key Points:
Works with objects and arrays (but generally avoided for arrays as for...of or traditional for loops are better).
Includes inherited properties (use hasOwnProperty() to avoid this).
  

// both with in and of both 
const arr = ['x', 'y', 'z'];
const obj = { a: 1, b: 2, c: 3 };

console.log('Using for...of:');
for (const value of arr) {
    console.log(value); // Output: x, y, z
}

console.log('Using for...in:');
for (const key in obj) {
    console.log(key); // Output: a, b, c
}

 */