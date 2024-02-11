

function sayMyname()
{

    console.log("h");
    console.log("a");
    console.log("n");
}

// sayMyname()

// function addTwoNumber(number1, number2)
// {
//     console.log (number1+number2)
// }
// addTwoNumber(2,3)
// addTwoNumber("1",2)
// addTwoNumber("a",2)

// const result= addTwoNumber(3,4)
// console.log(result);


function addTwoNUmber(number1,number2)
{
    return (number1 + number2)
}

const result = addTwoNUmber(3,6)
console.log("Result",result);

function logInUserMsg(username= "anu"){
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    // if(!undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username} just logged in`
}

const user = logInUserMsg("anupam")
console.log(user);
console.log(logInUserMsg());


// kcart
// function calculateCartPrice(...num1){ // rest operator
function calculateCartPrice(val1,val2, ...num1){
    return num1   
}
console.log(calculateCartPrice(200,300,500,600));

const user1 = {
    username:"anupam",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}

handleObject(user1)
handleObject({
    username:"mukul",
    price:399,
})

// array
const myNewArray = [200,300,500,6000]

function handleArr(getArray){
    return getArray[2]
}

console.log(handleArr(myNewArray));