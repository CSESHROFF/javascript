const accountId = 144553
let accountEmail = "anu@gmail.com"
var accountPassword = "1234"
accountCity = "muzaffarpur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "212121"
accountCity = "jaipur"
 
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//
/*
Prefer not to use var
because of issue in block scope and functional scope
*/