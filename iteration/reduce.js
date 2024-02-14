const myNUm = [1,2,3,4,5,6]

// const initialValue = 3
// muTotal = myNUm.reduce((acc,currenValue) =>{
//     console.log(`acc: ${acc} and current value is: ${currenValue}`);
//     return acc + currenValue
// },initialValue)

// console.log(muTotal);

const shoppingCart = [
    {
        itemNAme:'js course',
        price:2999
    },
    {
        itemNAme:'python',
        price:999
    },
    {
        itemNAme:'mobile',
        price:12999
    }
]

const total = shoppingCart.reduce((acc,item) => {
    console.log(item['itemNAme']);
    return acc + item.price

},0)
// console.log(total);