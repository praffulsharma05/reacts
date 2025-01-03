const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {            // call back function 
//  console.log(val);
 
// } )      
  
// coding.forEach( (item) => {
//     console.log(item);    
// })

// function printMe(item){
    // console.log(item);
    
// }
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);    
// })

const myCoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    } ,
    {
        languageName: "java",
        languagefileName: "java"
    } ,
    {
        languageName: "python ",
        languagefileName: "py"
    },
     {
        languageName: "C++",
        languagefileName: "cpp"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})

/*
JavaScript में forEach एक higher-order function है, जो arrays के लिए उपयोग होता है। इसका उपयोग array
के हर element को iterate करने और उस पर कोई operation perform करने के लिए किया जाता है। यह method functional
programming style को support करता है और
traditional for loop के comparison में code को concise और readable बनाता है।
Parameters:
element: Current element of the array (mandatory).
index: Current index of the element (optional).
array: The original array (optional).
*/

