//code of multiple line that is packed by package 
function sayMyName() {
    
console.log("h");
console.log("i");
console.log("f");
console.log("f");
console.log("u");
console.log("l");
    
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    //    let result = number1 + number2
    //    console.log("prafful");

    //    return result

    return number1 + number2
       
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){                                     //
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("prafful"))
console.log(loginUserMessage()); 
