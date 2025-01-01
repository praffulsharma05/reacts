// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2

//     return total 

// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)
// console.log(result1);
// console.log(result2);

//-----------------------------------------------------------------------------------------------------//
//CALL STACK
/*
In JavaScript, the call stack is a mechanism used to keep track of function calls in the order
they need to be executed.It's part of the JavaScript runtime and operates on the last in, 
first out (LIFO) principle, meaning the last functionadded to the stack is the first to be removed.

How the Call Stack Works:

Function Call: When a function is invoked, it is added (pushed) to the top of the call stack.
Execution: The JavaScript engine starts executing the function.
Nested Function Calls: If the currently executing function calls another function, that function is pushed onto the stack.
Completion: Once a function completes its execution, it is removed (popped) from the stack, and the execution resumes from 
the function below it.Global Context: The stack starts with the global execution context and continues to grow and
 shrink as functions are called and returned.

Call Stack Sequence:
The firstFunction is invoked → pushed to the stack.
Inside firstFunction, secondFunction is called → pushed to the stack.
Inside secondFunction, thirdFunction is called → pushed to the stack.
thirdFunction completes execution → popped from the stack.
secondFunction completes execution → popped from the stack.
firstFunction completes execution → popped from the stack.


At each step:

Start: Stack is empty.
firstFunction() → Stack: [firstFunction]
secondFunction() → Stack: [firstFunction, secondFunction]
thirdFunction() → Stack: [firstFunction, secondFunction, thirdFunction]
After thirdFunction returns → Stack: [firstFunction, secondFunction]
After secondFunction returns → Stack: [firstFunction]
After firstFunction returns → Stack is empty.
*/
function firstFunction() {
    console.log("Inside firstFunction");
    secondFunction();
    console.log("Back to firstFunction");
}

function secondFunction() {
    console.log("Inside secondFunction");
    thirdFunction();
}

function thirdFunction() {
    console.log("Inside thirdFunction");
}

firstFunction(); 