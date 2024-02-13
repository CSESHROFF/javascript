const myarr = ['anupam','shorff','kumar','cpp','javascrip']

// const values = myarr.forEach((item) => {
//     console.log(item);
// })

// console.log(values);

const myNum = [1,2,3,4,5,6,,8,9,10]

// const newNum = myNum.filter( (num) => num>4 )
const newNum = myNum.filter( (num) => {

    return     num >4
})

console.log(newNum);

const newnum = []
myNum.forEach((num) =>{
    if(num>4){
        newnum.push(num)
    }
})
console.log(newnum);


