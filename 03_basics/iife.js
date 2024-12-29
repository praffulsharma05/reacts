// Immediately Invoked Function Expressions

 
 /*
 ()() first () is for function defination second ()for execution call
  iife : global scope ke polution se problem hoti hai kai bar toh use global scope ke polution
   ya declaration ko hatane ke liye humne IIFE ka use kiya
 */ 

   (function chai(){
    //named iife hai
    console.log(`DB CONNECT`);
})();
    
( (name) => {
    //unknown iife
    console.log(`DB CONNECTED TWO ${name}`);v 
 })('prafful')
