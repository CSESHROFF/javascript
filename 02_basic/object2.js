// const tinderUser = new Object() //singleton object
const tinderUser= {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'some@email.com',
    fullname : {
        userfullname:{
            firstname : 'anupam',
            lastname :'shroff'
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:'a',
    2:'b'
}
const obj2 = {
    3:'c',
    4:'d'
}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:2,
        email:'2@gmail.com'
    }
]
console.log(user[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));


// de-structuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"anupam"
}

// course.courseInstructor
const {courseInstructor} =course
const {courseInstructor: instructor} =course

console.log(instructor);

// API

// {
//     "coursename": "js in hindi",
//     "price": "999",
//     "courseInstructor":"anupam"
// }
