// for of

// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
    
// }

// const greetings = "hello world"
// for (const i of greetings) {
//     console.log(i);
    
// }

// ejbwf
// maps

const map = new Map()
map.set('in',"india")
map.set('usa',"america")

console.log(map);
for (const [key,value] of map) {
    console.log(key, value);
    
}