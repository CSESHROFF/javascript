let score = "33as"

score = null
score = true
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33as" => NaN
// true=> 1; false=>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);