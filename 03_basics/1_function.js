// function calculateCartprice(val1,val2,...num1){  //(...num1) is a rest operator sara khel ... ka hai 
//     return num1
// }
// //console.log(calculateCartprice(200, 300, 400)) //bachi uhi value ...num1 le jata hai 

const user = {
    // username: "prafful",
    // price: 1899
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);                     // backtik
}

handleObject(user)


 handleObject({
                    username: "sam",
                    price:300
 })

 const myNewArray = [2000, 30000, 10000, 5400]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(myNewArray));
 