const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const myArray = Object.values(person);
  console.log(myArray);



  const person1= {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person1);
  console.log(myString);


  const person3 = {
    name: "John",
    today: new Date()
  };
  
  let myString3 = JSON.stringify(person3);
  console.log(myString3);