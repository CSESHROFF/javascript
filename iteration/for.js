

// for(let i = 0; i <= 10; i++){
//     const element = i;

//     if(element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j );
        
//     }
    
// }

// console.log(element);

let myArray = ["flash","batman","superman","ironman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and contunue

for (let index = 1; index <=20; index++) {

    // if(index == 5){
    //     console.log(`Detected 5`);
    //     break
    // }
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}
