//primitive 

//7 types : String , Number, Boolean, null, undefined Symbol,BigInt 


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id == anotherId);
// const bigNumber = 324323333322n




//Reference (Non primitive)

//Array, objects, Functions



const heros = ["Shatiman", "naagraj", "doga"]
let myObj={
    name: "hitesh",
    age: 22,
}


const myFunction= function(){
    console.log("hello world");    
}

console.log(typeof  myFunction );



/* note: 
The typeOf Operator : 
the production unaryExpression: typeOf UnaryExpression is evaluatted as follows:
1. let val be the result of evaluting UnaryExpression.
2. if Type(val) is Reference, then
    a. if IsUnreslvebleReference(val) is true return "undefined".
    b. let val be GetValue(val)
3. Return a String determined by Type(val) according to table 20.

type of val : Result
Undefined:     "undefined"
Null     :     "object"
Boolean :    "number"
String :     "string"
object(native and does not  :   " object"
implement [[call]])     
object(native or host and :    "function"
does implement[[call]])
*/


