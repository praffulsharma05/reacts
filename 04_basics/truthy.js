 const userEmail = "hp3@gmail.com"

if (userEmail) {
    console.log("got user email");
} else{
    console.log("Don't have user email");    
}

//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value 
//"0", 'false', " ",  
// function(){} empty function bhi truthy value hai
//[] array bhi truthy value, {} object bhi truthy value hai
 
// if(userEmail.length === 0){
//     console.log("array is empty");
    
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }
/*
false ==0:true
false =='':true
0 =='':true
*/

//Nullish  Coalescing Operator

let val1;
val1 = 5?? 10

// val1 = null ?? 10 ?? 15
// val1 = undefined ?? 15
val1 = null ?? 10 ??  20
console.log(val1); 

// Terniary Operator

// condition ? true  : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less then 80"): console.log
("more then 80")

