
// console.log(a);
// console.log(b);

// var c=300
let a=300 // global scope
if(true)
{
    let a= 10 // local scope
    var c = 30
    console.log("inner",a);
}
console.log(c);
console.log(a);