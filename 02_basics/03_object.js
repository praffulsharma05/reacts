//singleton 

//object literals
const mySym = Symbol("key1")


const JsUser = {                  //{} is a object
    name: "Prafful",
    "full name": "prafful sharma",
    [mySym] : "myKey1",        //[] using this as a sysntax
    age: 18,
    location: "kota",
    email: "praffulsarma38@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
} 

// console.log(JsUser.email)
// console.log(JsUser["email"])      
// console.log(JsUser["full name"])


// console.log(JsUser[mySym])


JsUser.email = "prsfful@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "prafful323@gmail.com"
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello js user"); 
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo( ));

