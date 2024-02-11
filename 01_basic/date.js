let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCReateDate = new Date(2023,0,23)

let myCReateDate = new Date(2023,0,23,5,3)
console.log(myCReateDate.toDateString());
console.log(myCReateDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCReateDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'timeZone'
})

