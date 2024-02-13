const books = [
    {title:'Book One', genre:'Fiction', publish:1981},
    {title:'Book Two', genre:'Non-Fiction', publish:1982},
    {title:'Book Three', genre:'History', publish:1983},
    {title:'Book Four', genre:'Math', publish:1984},
    {title:'Book Five', genre:'Physic', publish:1985},
    {title:'Book SIx', genre:'English', publish:1986},
    {title:'Book Seven', genre:'Math', publish:1987},
    {title:'Book Eight', genre:'History', publish:1988},
    {title:'Book Nine', genre:'Math', publish:1989},
    {title:'Book TEn', genre:'Fiction', publish:1990}
];

// console.log(books);
let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => bk.publish < 2000 && bk.genre === 'Math')
console.log(userBooks);

