// Primitive

// 7 types: String,Number,Boolean,Null,undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id=Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2222222222222222n
console.log(bigNumber);
console.log(typeof bigNumber);



// Reference (Non-Primitive)
// Array, Objects, Functions

const heros = ["anupam","kumar","shorff"] //Array represent in square bracket
console.log(heros);

//Object represent in curly bracket
let myObject = {  
    name:"Anupam",
    surname:"Shorff",
    roll:"123",
}
console.log(myObject);

// function
const myFunction= function(){
    console.log("MY function");
}

console.log(typeof outsideTem);
console.log(typeof id);
console.log(typeof myFunction); //object-function
