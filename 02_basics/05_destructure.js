// we can deconstruct the objects

const course={
    coursename:"Javascript",
    courseprice:999,
    courseInstructor:"hiteshChaudhary"
};

const {courseInstructor:instructor}=course;
console.log(instructor);

//we can destructure the array also

// we will use json after using api fetching data from backend