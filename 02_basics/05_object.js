//***********************************De-Structure********************************

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:  "hitesh"
}

// course.courseInstructor //syntatical sugar

const {courseInstructor: instructor} =course   //de-structure
console.log(instructor);

//[api]

// {
//     "name" : "hitesh",
//     "coursename": "js in hindi",
//     "price":"free"
// }


