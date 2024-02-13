const myarr = ['anupam','shorff','kumar','cpp','javascrip']

// myarr.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item){
//     console.log(item);
// }
// myarr.forEach(printme)


myarr.forEach( (item, index, arr) => {
    console.log(item, index, arr);

})


const myCoding = [
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})