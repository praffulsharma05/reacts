// var c = 3000
// let a =100000


//     if(true){
//         let a =10
//         const b =12
//         var c= 13
//     }

// console.log(a);
// // console.log(b);
// console.log(c);

/************************Nested-SCOPE*********** */
// function one(){
//     const username = "prafful"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//         console.log(website);
        
//     }
//     // console.log(website); 
//     two()
    
//}
// one()

// if(true){
//     const username = "prafful"
//     if(username == "prafful"){
//         const website = "youtube"
        // console.log(username  + website);
    // }
    // console.log(website);
    
// }
// console.log(username);


// +++++++++++++++++++++++++++++++++++  Ineresting  ++++++++++++++++++++++++++++++++
// console.log(addone(5));
// function addone(num){     // yaha addone ko sirf declearation diya h
//     return num +1
// }
 

// addTwo(5)
// const addTwo  = function(num){   // yaha addTwo ko hold bhi kr diya hai
//     return num +2
// }
 







//*****************************************************Arrows functions********************************************** */
// const user = {
//     username: "prafful",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);//`${this.username}` 
//         console.log(this);
//     }
// }

// user.welcomeMessage()  
// user.username = "sam"
// user.welcomeMessage()  

// console.log(this);    //brower me jo sabse jada global object  hai windows
  

// const chai =  function(){
//         let username = "hitesh"
//         console.log(this);
              
// }
//  chai()

// const addTwo = (num1 , num2)=>{   // basic  arrow function { } likha toh return ko lagana jaruri hai
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1 , num2)=> (num1 + num2)   //  implicet return arrw function agar () in perenthisis me wrap kiya toh return ki jarurat nhi ha

// const addTwo = (num1 , num2)=> num1 + num2
// const addTwo = (num1 , num2) =>({ username: "prafful"})
//  console.log(addTwo(3,4));

//  const myArray =  [1, 2, 3];
//  myArray.forEach((item) => {
//      console.log(item); // Prints each item  Example of Correct Usage    Here’s a minimal working example:
     
//  });
 
