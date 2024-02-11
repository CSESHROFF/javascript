// Singleton
// Object.create


// object literals

const mySym =Symbol("key1")


const jsUser ={
    name:'anupam',
    age:22,
    [mySym]:'mykey1',
    location:'muzaffarpur',
    email:'anupam@google.com',
    isLoggedIn:'fals',
    lastLoginDays:["Monday","wednesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);// another way to acces the object and this more
console.log(jsUser[mySym]);//symbol print

// change value
jsUser.name="anupam shroff"
console.log(jsUser["name"]);
// Object.freeze(jsUser)
jsUser.name="mukul"
console.log(jsUser["name"]);
console.log(jsUser);

// add function

jsUser.greeting= function(){
    console.log("hello js user");
}
jsUser.greeting2= function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());