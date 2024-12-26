
// const tinderUser = new Object()  //singleton 
const tinderUser = {}  //non-singleton object
tinderUser.id = "1234abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname?.userfullname );

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 =Object.assign({}, obj1, obj2, obj4) // {} this is act as a target
/*The Object.assign() static method copies all enumerable own properties from
 one or more source objects to a target object.
 It returns the modified target object
*The propertyIsEnumerable() method of Object instances returns a boolean 
indicating whether the specified property is this object's enumerable own property.
*/
// const obj3 ={obj1, obj2}

 

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
    id: 1,
    email: "prafful@gmail.com"
},
{
    id: 1,
    email: "prafful@gmail.com"
},
{
    id: 1,
    email: "prafful@gmail.com"
},
{
    id: 1,
    email: "prafful@gmail.com"
}
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));

/*
constructor
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocalString
toStyring
valueOf
*/

